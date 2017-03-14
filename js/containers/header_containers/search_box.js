// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { fetchSearchResults,
		 fetchFoodItem,
		 toggleSearchResultsList,
		 foodItemSearchTerm, 
		 toggleAmountInputForm, 
		 toggleSearchInputForm  } from '../../actions/index.js';

// Components
import SearchListItem from '../../components/search_list_item';

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0,
					   keyCodeCheck: '' };
					   
		this.onInputChange = this.onInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	
	onInputChange(e) {

		let term = e.target.value;
		let results = this.props.fetchSearchResults(term);
		let searchListItem = document.querySelector('#search-list').childNodes;
								
			if(term.length === 0) {
				this.props.toggleSearchResultsList(['search-list-hidden'])
			}
			if(term.length === 1) {
				this.props.toggleSearchResultsList([''])
			}

		this.props.foodItemSearchTerm(term)
		this.setState({ counter : 0,
						keyCodeCheck : '' });

		searchListItem.forEach((item) => {
			if(item.className === 'search-list-item-selected') {
				item.classList.remove('search-list-item-selected')
			}
		});
	}

	browseList(keyCode) {
		const selected = 'search-list-item-selected';
		const children = document.querySelector('#search-list').childNodes;
		let counter = this.state.counter;

		children.forEach((child) => {
			if(child.className === selected) {
				child.classList.remove(selected)
			}
		})	
		if(counter > children.length - 1) {
			counter = 0;
		}
		if(counter < 0) {
			counter = children.length -1;
		}	
		if(keyCode === 40){
			if(this.state.keyCodeCheck === '') {
				this.setState({keyCodeCheck : 40})
			} 
			if (this.state.keyCodeCheck === 38) {
				if(counter === children.length - 2) {
					counter = 0;
				} else if(counter === children.length - 1) {
					counter = 1
				} else {
					counter += 2;
				}
				this.setState({keyCodeCheck : 40})
			}
			children[counter].classList.add(selected)
			this.setState({counter: counter + 1});
		}
		if(keyCode === 38){
			if(this.state.keyCodeCheck === '') {
				this.setState({keyCodeCheck : 38})
				counter = children.length - 1;
			} 
			if (this.state.keyCodeCheck === 40) {
				if(counter === 1) {
					counter = children.length - 1
				} else if (counter === 0) {
					counter = children.length - 2 
				} else {
					counter -= 2
				}
				this.setState({keyCodeCheck : 38})
			}
			children[counter].classList.add(selected)
			this.setState({counter: counter - 1});
		}
	}
	onListItemSelect() {
		let target = document.querySelector('.search-list-item-selected')
		if(target === null) {
			alert('Du nåste välja ett livsmedel från listan')
			document.querySelector('#search-box').focus()
		} else {

			const foodItems = this.props.foodItems;
			const id = target.id;
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
				setTimeout(() => {
					document.querySelector('.input-amount').focus()
				},100);
			}
		}
	}
	onFormSubmit(e){
		e.preventDefault();
	}
	render() {
		return(
			<form className={this.props.searchInputFormClass}
				  onSubmit={this.onFormSubmit} 
				  autoComplete="off">
				<input 
					id="search-box"
					className={this.props.searchBoxClass}
					type="text" 
					placeholder="sök livsmedel"
					value={this.props.term}
					onChange={this.onInputChange} 
					onKeyDown={(e) => {
	  			 		let keyCode = e.keyCode;

	  			 		if (keyCode === 40 || keyCode === 38) {
	  			 			e.preventDefault();
	  			 			this.browseList(keyCode);
	  			 		} 
	  			 		if (keyCode === 13) {
	  			 			this.onListItemSelect()
						}	 
	  			 	}}
				/>
			</form>
		);
	}
}
function mapStateToProps(state) {
	return { searchResults: state.searchResults,
			 searchResultsListClass: state.toggleSearchResultsList,
			 term: state.foodItemSearchTerm ,
			 foodItems: state.addFoodItem}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators ({ fetchSearchResults, 
								 toggleSearchResultsList, 
								 foodItemSearchTerm, 
								 fetchFoodItem,
								 toggleSearchResultsList,
								 foodItemSearchTerm, 
								 toggleAmountInputForm, 
								 toggleSearchInputForm  }, dispatch);
} 
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);