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
			initialTree: getters.filteredItems
		}
	},

	handleChange(event){
         actions.setFilter(event);
    },

	componentDidMount() {
		//debugger;
		reactor.observe(getters.filteredItems, (data) => {
			this.setState(data);
		});

		actions.getData();
	},

	render(){
		return(
			<div className="widget">
				<Input filter={this.handleChange} />
				<FolderContainer items={this.state.initialTree} />
			</div>
		);
	}
});

MainApp.propTypes = {initialtree: React.PropTypes.object};
export default MainApp;