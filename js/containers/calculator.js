import React, { Component } from 'react'
import SearchListItem from '../components/search_list_item';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Calculator extends Component {
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
			<ul id="search-list" ref="search-list">
				{foodArr}
			</ul>
		);	
	}
}

function mapStateToProps(state) {
	return { searchResults: state.searchResults }
}

export default connect(mapStateToProps, null)(Calculator);