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
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	
	onInputChange(e) {
		let term = e.target.value;
		let results = this.props.fetchSearchResults(term);
		/*if(term.length === 0) {
			let list = document.getElementById("search-list");
			console.log(list.firstChild)
			 while(list.firstChild){
        list.removeChild(list.firstChild);
      }
		}*/
		this.setState({ term });
	}
	browseList(keyCode) {
		
		let children = document.getElementById('search-list').childNodes;

		if(keyCode === 40){
			children.forEach((child) => {
									
			});
		}
		if(keyCode === 38){
			
			for (let i = 0; i < children.length; i++) {
				if(children[i].className === 'search-list-item-selected')  {
					children[i].classList.remove('search-list-item-selected')
					children[i-1] === undefined ? children[children.length-1].classList.add('search-list-item-selected') : children[i-1].classList.add('search-list-item-selected')
					break;
				}
				else {
					children[children.length-1].classList.add('search-list-item-selected')
				}
			}
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
					type="text" 
					placeholder="search"
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