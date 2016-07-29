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
        //setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }

  render() {
    return (
        <div>
            <Input searchText={this.state.text} myEventHandler={this.handleChangeFilter.bind(this)} />
            <FolderContainer view={this.state.expand} searchText={this.state.text} data={this.state.data} />
        </div>
    );
  }
}
export default App;
