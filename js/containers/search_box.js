import React, { Component } from 'react';

export default class SearchBox extends Component {
	onInputChange(term) {
		console.log(term)
	}
	render() {
		return(
			<form>
				<input 
					type="text" 
					placeholder="search"
					onChange={e => this.onInputChange(e.target.value)} 
				/>
			</form>
		);
	}
}