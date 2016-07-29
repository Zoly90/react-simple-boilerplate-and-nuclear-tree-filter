import React, {Component} from 'react';
import File from './file.jsx';
import Folder from './folder.jsx';

class TakeEverythingFromFolder extends Component {
    render() {

        const items = this.props.data;
        let allFolderItems = [];

        items.forEach(function (item) {
            if (item.type === 'folder') {
                allFolderItems.push(<Folder item={item} name={item.name}/>);
            } else {
                allFolderItems.push(<File name={item.name}/>);
            }

            if (item.children && item.expanded === true) {
                allFolderItems.push(<TakeEverythingFromFolder data={item.children}/>);
            }
        });

        if (allFolderItems.length > 0) {
            return (
                <ul>
                    {allFolderItems}
                </ul>);
        }   else {
            return <span>{allFolderItems}</span>
        }
    }
}

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

        const items = this.props.data;
        let folderItems = [];
        const self = this;

        if (this.props.searchText === "")
            items.forEach(function (item) {
                if (item.type === 'folder') {
                    folderItems.push(<Folder handleChangeExpand={self.handleChangeExpand.bind(self, item)} item={item} name={item.name}/>);
                } else {
                    folderItems.push(<File name={item.name}/>);
                }

                if (item.children && item.expanded === true) {
                    folderItems.push(<FolderContainer searchText={self.props.searchText} data={item.children}/>);
                }
            });

        else {
            items.forEach(function (item) {
                    if (item.type === 'folder' && item.name.indexOf(self.props.searchText) > -1) {
                        folderItems.push(<Folder  handleChangeExpand={self.handleChangeExpand.bind(self, item)} item={item} name={item.name}/>);
                        if (item.children) {
                            folderItems.push(<TakeEverythingFromFolder data={item.children}/>);
                        }

                    } else {
                        if (item.name.indexOf(self.props.searchText) > -1) {
                            folderItems.push(<File name={item.name}/>);
                        }
                        else {
                            if (item.children && item.expanded === true) {
                                folderItems.push(<FolderContainer searchText={self.props.searchText}
                                                                  data={item.children}/>);
                            }
                        }
                    }
                }
            );
        }

        if (folderItems.length > 0) {
            return (
                <ul>
                    {folderItems}
                </ul>);
        }   else {
            return <span>{folderItems}</span>
        }
    }
}

export default FolderContainer;
