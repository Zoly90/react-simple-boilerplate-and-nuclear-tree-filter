import React, {Component} from 'react';

class Folder extends Component {
    render() {
        return (
            <li className = "folder-item" >{this.props.name}</li>
        );
    }
}

export default Folder;
