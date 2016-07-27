import React, {Component} from 'react';
import FolderContainer from './folderContainer.jsx'
import Input from './input.jsx'

const data = [
    {
        type: "folder",
        name: "animals",
        path: "/animals",
        children: [
            {
                type: "folder",
                name: "cat",
                path: "/animals/cat",
                children: [
                    {
                        type: "folder",
                        name: "images",
                        path: "/animals/cat/images",
                        children: [
                            {
                                type: "file",
                                name: "cat001.jpg",
                                path: "/animals/cat/images/cat001.jpg"
                            }, {
                                type: "file",
                                name: "cat001.jpg",
                                path: "/animals/cat/images/cat002.jpg"
                            }
                        ]
                    },
                    {
                        type: "file",
                        name: "cat002.jpg",
                        path: "/animals/cat/images/cat002.jpg"
                    },
                    {
                        type: "file",
                        name: "cat003.jpg",
                        path: "/animals/cat/images/cat003.jpg"
                    }
                ]
            }
        ]
    },

    {
        type: 'folder',
        name: 'app',
        children: [
            {
                type: 'file',
                name: 'index.html'
            },
            {
                type: 'folder',
                name: 'js',
                children: [
                    {
                        type: 'file',
                        name: 'main.js'
                    },
                    {
                        type: 'file',
                        name: 'app.js'
                    },
                    {
                        type: 'file',
                        name: 'misc.js'
                    },
                    {
                        type: 'folder',
                        name: 'vendor',
                        children: [
                            {
                                type: 'file',
                                name: 'jquery.js'
                            },
                            {
                                type: 'file',
                                name: 'underscore.js'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'folder',
                name: 'css',
                children: [
                    {
                        type: 'file',
                        name: 'reset.css'
                    },
                    {
                        type: 'file',
                        name: 'main.css'
                    }
                ]
            }
        ]
    }
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ""}
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

  render() {
    return (
        <div className='widget'>
            <Input searchText={this.state.text} myEventHandler={this.handleChange.bind(this)} />
            <FolderContainer searchText={this.state.text} data={data} />
        </div>
    );
  }
}
export default App;
