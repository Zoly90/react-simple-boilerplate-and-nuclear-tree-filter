import React, {Component} from 'react';
import File from './file.jsx';
import Folder from './folder.jsx';

class TakeEverythingFromFolder extends Component {
    render()    {
        
        const items = this.props.data;
        let allFolderItems = [];
        
        items.forEach(   function(item) {
            if(item.type === 'folder') {
                allFolderItems.push(<Folder name={item.name} />);
            } else {
                allFolderItems.push(<File name={item.name}/>);
            }

            if(item.children) {
                allFolderItems.push(<TakeEverythingFromFolder data={item.children} />);
            }
        });

        return (
            <ul>
                {allFolderItems}
            </ul>);
    }
}

class FolderContainer extends Component {

    render() {
        
        const items = this.props.data;
        let folderItems = [];
        const self = this;
        
        if (this.props.searchText === "")
            items.forEach( function(item) {
                if(item.type === 'folder') {
                    folderItems.push(<Folder name={item.name} />);
                } else {
                    folderItems.push(<File name={item.name}/>);
                }

                if(item.children) {
                    folderItems.push(<FolderContainer searchText={self.props.searchText} data={item.children} />);
                }
            });
            
        else{
            items.forEach( function(item) {
                    if(item.type === 'folder' && item.name.indexOf(self.props.searchText) > -1) {
                        folderItems.push(<Folder name={item.name} />);
                        if(item.children) {
                            folderItems.push(<TakeEverythingFromFolder data={item.children} />);
                        }

                    } else {
                        if (item.name.indexOf(self.props.searchText) > -1) {
                            folderItems.push(<File name={item.name}/>);
                        }
                        else    {
                            if(item.children) {
                                folderItems.push(<FolderContainer searchText={self.props.searchText} data={item.children} />);
                            }
                        }
                    }
                }
            );
        }

        return (
            <ul>
                {folderItems}
            </ul>
        );
    }
}

export default FolderContainer;
