import React, { Component } from 'react'
import SearchListItem from '../components/search_list_item';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { fetchSearchResults } from '../actions/index.js';
export class Calculator extends Component {
	
	
	render() {
		let foods = this.props.searchResults;
		//if (foods.length > 0){console.log(foods[0][3].name)}
		var foodArr = [];
		if(foods.length > 0) {
			
			
			for(var i = 0; i < 20; i++) {

				foodArr.push(<li>{foods[0][i].name}</li>)
			}
			console.log(foodArr)
		}		
		return(
			<ul id="search-results">
				{foodArr}
			</ul>
		);	
	}
	
}

function mapStateToProps(state) {
	return { searchResults: state.searchResults }
}

export default connect(mapStateToProps, null)(Calculator);