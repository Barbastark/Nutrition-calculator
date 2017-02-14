import React from 'react';

const SearchListItem = (props) => {
	return (
		<li  content={props.content}>
			{props.content}
		</li>
	);
}

export default SearchListItem;