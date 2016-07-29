import React, {Component} from 'react';
import App from './App.jsx'

class Folder extends Component {
    render() {
        if(this.props.item.expanded === false) {
            return (
                <div>
                    <button type="submit" onClick={this.props.handleChangeExpand} className="btnExpCol"><img src="./styles/images/up.png" className="imgExpCol" alt="Submit"/></button>
                    <li className="folder-item">{this.props.item.name}</li>
                </div>
            );
        }
        else    {
            return (
                <div>
                    <button type="submit" onClick={this.props.handleChangeExpand} className="btnExpCol"><img src="./styles/images/down.png" className="imgExpCol" alt="Submit"/></button>
                    <li className="folder-item">{this.props.name}</li>
                </div>
            );
        }
    }
}

export default Folder;
