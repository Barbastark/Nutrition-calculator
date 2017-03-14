import React, { Component } from 'react'
import SearchListItem from '../../components/search_list_item';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions

import { toggleSearchButton, 
		 toggleSearchResultsList, 
		 fetchFoodItem, 
		 foodItemSearchTerm, 
		 toggleAmountInputForm, 
		 toggleSearchInputForm,
		 addFoodItem 
		} from '../../actions/index.js';

class CalculatorSearchList extends Component {
	componentDidMount() {
		const searchButtonVisible = ['search search-visible']
				
		if (this.props.searchButtonClass[0] === 'search') {
			this.props.toggleSearchButton(searchButtonVisible)
		}
	}
	componentWillUnmount() {
		this.props.toggleSearchResultsList(['search-list-hidden'])
	}
	handleClick(e) {
		const foodItems = this.props.foodItems;
		const id = e.target.id;
		let check = true;

		if (foodItems.length > 0) {
			for(let i = 0; i < foodItems.length; i++) {
				if(foodItems[i].id == id) {
					alert(`Du kan inte lägga till ${foodItems[i].name} två gånger`)
					check = false;
					this.props.foodItemSearchTerm('')
					break;
				}
			}
		}
		if(foodItems.length === 0 || check ) {
			this.props.fetchFoodItem(id)
			this.props.toggleSearchResultsList(['search-list-hidden'])
			this.props.foodItemSearchTerm('')
			this.props.toggleSearchInputForm(['search-food-items-form-hidden'])
			this.props.toggleAmountInputForm(['amount-input-form'])
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
		 				content={foods[0][i].name} 
		 				handleClick={ (e) => {this.handleClick(e)}}
		 				removeListItem={(e) => {this.removeListItem(e)}}
		 				/>
				 	)
				}
			}
		}		
		return(
			<ul id="search-list" className={this.props.searchResultsListClass[0]}>
				{foodArr}
			</ul>
		);	
	}
}
function mapStateToProps(state) {
	return { searchResults: state.searchResults,
			 searchButtonClass: state.toggleSearchButton,
			 searchResultsListClass: state.toggleSearchResultsList,
			 searchInputFormClass: state.toggleSearchInputForm
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators ({ toggleSearchButton,
								 toggleSearchResultsList, 
								 fetchFoodItem, 
								 foodItemSearchTerm, 
								 toggleAmountInputForm, 
								 toggleSearchInputForm }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorSearchList);