import React, {Component} from 'react';

class Input extends Component {

    render() {

        let string;
        if(this.props.searchText != "")
            string = "Searching for: ";
        else
            string = "";
        return (
            <div>
                <div className = 'widget'>
                    <img src="./styles/images/magnifying-glass.png" className="magnifyingGlass" alt="Magnifying Glass"/>
                    <input
                        type="text"
                        placeholder="filter..."
                        onChange={this.props.myEventHandler}
                        value={this.props.searchText}
                    />
                </div>
                <div className="searching">
                    {string} {this.props.searchText}
                </div>
            </div>)
    }
}

export default Input;

