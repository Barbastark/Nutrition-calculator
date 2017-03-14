import React, { Component } from 'react';

class SearchListItem extends Component {
	render() {
		return (
			<li  content={this.props.content} 
				 id={this.props.id}
				 onClick={this.props.handleClick}
				 >
				{this.props.content}
			</li>
		);
	}
	
}
export default SearchListItem;