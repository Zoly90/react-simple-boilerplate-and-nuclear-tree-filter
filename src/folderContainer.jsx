import React, {Component} from 'react';
import File from './file.jsx';
import Folder from './folder.jsx';

class FolderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {shouldRerender: true};
    }

    handleChangeExpand(item) {
        item.expanded = !item.expanded;
        this.setState({shouldRerender: !this.state.shouldRerender});
    }

    render() {

        let folderItems = [];
        const self = this;
        const items = this.props.data;



        items.forEach(function (item) {
            if (item.type === 'folder') {
                folderItems.push(<Folder handleChangeExpand={self.handleChangeExpand.bind(self, item)} item={item} name={item.name}/>);
            } else {
                folderItems.push(<File name={item.name}/>);
            }

            if (item.children && item.expanded === true) {
                folderItems.push(<FolderContainer searchText={self.props.searchText} data={item.children}/>);
            }
        })

        return (
            <ul>
                {folderItems}
            </ul>);
    }
}

export default FolderContainer;
