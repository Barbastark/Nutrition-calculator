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
		
		this.setState({ term });
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