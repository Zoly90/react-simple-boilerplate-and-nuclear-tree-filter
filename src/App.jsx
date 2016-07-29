import React, {Component} from 'react';
import FolderContainer from './folderContainer.jsx'
import Input from './input.jsx'
import $ from 'jquery'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "", data: [], expand: true}
    }

    handleChangeFilter(event) {
        this.setState({
            text: event.target.value
        });
    }

    loadCommentsFromServer()  {
        $.ajax({
            url: 'http://localhost:3000/src/json.js',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data.data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.url, status, err.toString());
            }.bind(this)
        });
    }

    componentDidMount()  {
        this.loadCommentsFromServer();
    }

    filtering(items, string, self) {
        let dontNeed = [], filteredList = [];

        items.forEach(function (item) {
            if (item.type === 'folder' && item.name.indexOf(string) > -1 && item.expanded === false) {
                filteredList.push(item);
            } else    {
                if (item.type === 'folder' && item.name.indexOf(string) > -1 && item.expanded === true){
                    filteredList.push(item);
                    return filteredList;
                    //self.filtering(item.children, self);
                } else  {
                    if (item.type === 'folder' && item.expanded === true) {
                        dontNeed = self.filtering(item.children, string, self);
                        dontNeed.forEach(function (something){
                            filteredList.push(something);
                        });
                    } else  {
                        if (item.type === 'file' && item.name.indexOf(string) > -1)
                            filteredList.push(item);
                    }
                }
            }
        });

        return filteredList;
    }

  render() {

      let items = [];
      if (this.state.text === ""){
          items = this.state.data;
      } else  {
          items = this.filtering(this.state.data, this.state.text, this)
      }
      
    return (
        <div>
            <Input searchText={this.state.text} myEventHandler={this.handleChangeFilter.bind(this)} />
            <FolderContainer searchText={this.state.text} data={items} />
        </div>
    );
  }
}
export default App;
