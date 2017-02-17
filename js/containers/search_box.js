// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { fetchSearchResults } from '../actions/index.js';

// Components
import SearchListItem from '../components/search_list_item';

export class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '',
					   counter: 0,
					   keyCodeCheck: '' };
					   
		this.onInputChange = this.onInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	
	onInputChange(e) {
		let term = e.target.value;
		let results = this.props.fetchSearchResults(term);
		let searchListItem = document.querySelector('#search-list').childNodes;
		let searchList = document.querySelector('#search-list')

			if(term.length === 0) {
				searchList.classList.add('search-list-hidden')
			}
			if(term.length === 1) {
				searchList.classList.remove('search-list-hidden')
			}

		this.setState({ term, 
						counter : 0,
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
			console.log(counter)
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
				}
				else {
					counter -= 2
				}
				this.setState({keyCodeCheck : 38})
			}
			console.log(counter)
			children[counter].classList.add(selected)
			this.setState({counter: counter - 1});
		}
	}
	onListItemSelect() {
		alert('hello')
	}
	onFormSubmit(e){
		e.preventDefault();
	}
	render() {
		return(
			<form onSubmit={this.onFormSubmit}>
				<input 
					id="search-box"
					type="text" 
					placeholder="sök livsmedel"
					value={this.state.term}
					onChange={this.onInputChange} 
					onKeyDown={(e) => {
	  			 		let keyCode = e.keyCode;

	  			 		if (keyCode === 40 || keyCode === 38) {
	  			 			e.preventDefault();
	  			 			this.browseList(keyCode);
	  			 		}  
	  			 		if (keyCode === 13) {
						   let target = document.querySelector('.search-list-item-selected')
						   this.onListItemSelect(target)
						}}	
      				}
				/>
			</form>
		);
	}
}
function mapStateToProps(state) {
	return { searchResults: state.searchResults }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchSearchResults}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);