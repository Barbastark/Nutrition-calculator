import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class SiteNav extends Component {
	toggleNav() {
		const nav = document.querySelector('.site-nav');
		const content = document.querySelector('.content-wrapper');
		const navIcon = document.querySelector('#nav-icon');
		const overlay = document.querySelector('#overlay')

		
			nav.classList.remove('site-nav-show');
			content.classList.remove('content-wrapper-hide');
			navIcon.classList.remove('open');
			overlay.classList.remove('overlay');
			overlay.classList.add('overlay-hidden');
	}
	render() {
		return (
			<div className="site-nav">
			<ul>
                <li>
                  <IndexLink to="/" onClick={this.toggleNav.bind(this)}>
                    Startsida
  	 	          </IndexLink>
                </li>
                <li>
                  <Link to="/calculator" onClick={this.toggleNav.bind(this)}>
                    Näringskalkulator
                  </Link>
                </li>
               </ul>
			</div>
		);
	}
}