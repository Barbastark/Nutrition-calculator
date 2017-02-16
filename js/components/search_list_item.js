import React from 'react';

const SearchListItem = (props) => {
	return (
		<li  content={props.content} id={props.id}>
			{props.content}
		</li>
	);
}

export default SearchListItem;