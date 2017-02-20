import React, { Component } from 'react'
import SearchListItem from '../components/search_list_item';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { toggleSearchButton } from '../actions/index.js';

export class Calculator extends Component {
	componentDidMount() {
		const searchButtonVisible = ['search search-visible']
				
		if (this.props.searchButtonClass[0] === 'search') {
			this.props.toggleSearchButton(searchButtonVisible)
		}
	}
	render() {
		let foods = this.props.searchResults;
		let foodArr = [];

		if(foods.length > 0) {
			for(var i = 0; i < 20; i++) {
				if(foods[0][i] === undefined){
					break;
				}
				else {
				 foodArr.push(<SearchListItem 
				 				key={foods[0][i].number} 
				 				id={foods[0][i].number} 
				 				content={foods[0][i].name} />)
				}
			}
		}		
		return(
			<ul id="search-list">
				{foodArr}
			</ul>
		);	
	}
}

function mapStateToProps(state) {
	return { searchResults: state.searchResults,
			 searchButtonClass: state.toggleSearchButton
	 }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators ({ toggleSearchButton }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);