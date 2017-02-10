import React, { Component } from 'react';
import SearchBox from '../containers/search_box';
export default class Header extends Component {
	toggleNav() {

		const nav = document.querySelector('.site-nav');
		const content = document.querySelector('.content-wrapper');

		if(nav.classList.contains('site-nav-show')) {
			nav.classList.remove('site-nav-show');
			content.classList.remove('content-wrapper-hide');
		} else {
			nav.classList.add('site-nav-show');
			content.classList.add('content-wrapper-hide');
		}
	}
	render() {
		return(
			<header>
				<div id="nav-toggle"
					 onClick={this.toggleNav.bind(this)}>
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