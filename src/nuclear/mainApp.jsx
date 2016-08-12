import React, {Component} from 'react';
import getters from './getters.jsx';
import reactor from './reactor.jsx'
import actions from './actions.jsx'
import Input from '../input.jsx'
import FolderContainer from '../folderContainer.jsx'

const MainApp = React.createClass	({
	mixins: [reactor.ReactMixin],

	getDataBindings(){
		return{
			data: getters.data,
			value: getters.value
		}
	},

	handleChange(event){
		reactor.observe(getters.value, (value) => {
			this.setState(value);
		});

		actions.setFilter({value: event.target.value});
    },

	componentDidMount() {
		reactor.observe(getters.folders, (data) => {
			this.setState(data);
		});

		actions.getData();
	},

	render(){
		return(
			<div className="widget">
				<Input value={this.state.data.value} handleFilter={this.handleChange} />
				<FolderContainer items={this.state.data.directories} />
			</div>
		);
	}
});

MainApp.propTypes = {data: React.PropTypes.object};
export default MainApp;