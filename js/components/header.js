import React, { Component } from 'react';
import SearchBox from '../containers/search_box';
export default class Header extends Component {
	render() {
		return(
			<header>
				<div id="nav-toggle">
					<p className="toggleNav">&#9776;</p>
				</div>
				<SearchBox />
				<div id="logo">
					<img src="../../img/logo.png" alt="logo"/>
				</div>
			</header>
		);
	}
}