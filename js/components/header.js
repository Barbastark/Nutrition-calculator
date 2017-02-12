import React, { Component } from 'react';
import SearchBox from '../containers/search_box';

export default class Header extends Component {
	toggleNav() {

		const nav = document.querySelector('.site-nav');
		const content = document.querySelector('.content-wrapper');
		const navIcon = document.querySelector('#nav-icon');
		const overlay = document.querySelector('#overlay')

		if(nav.classList.contains('site-nav-show')) {
			nav.classList.remove('site-nav-show');
			content.classList.remove('content-wrapper-hide');
			navIcon.classList.remove('open');
			overlay.classList.remove('overlay');
			overlay.classList.add('overlay-hidden');
		} else {
			nav.classList.add('site-nav-show');
			content.classList.add('content-wrapper-hide');
			navIcon.classList.add('open');
			overlay.classList.add('overlay');
			overlay.classList.remove('overlay-hidden');
		}
	}
	render() {
		return(
			<header>
				<div id="nav-icon"
					 onClick={this.toggleNav.bind(this)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<SearchBox />
				<div id="logo">
					<img src={"https://barbastark.github.io/Nutrition-calculator/img/logo.png"} />
				</div>
			</header>
		);
	}
}

