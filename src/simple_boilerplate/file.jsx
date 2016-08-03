import React, {Component} from 'react';

class File extends Component {
    render() {
        return (
            <li className = "file-item" >{this.props.name}</li>
        );
    }
}

export default File;
