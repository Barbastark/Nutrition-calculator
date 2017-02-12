// React
import React, { Component } from 'react';

// Containers & Components
import Header from './header.js';
import SiteNav from './site_nav';

export default class App extends Component {
	render(){
		return (
			<div id="site-wrapper">
				<SiteNav />
				<div id="overlay" className="overlay-hidden">
				</div>
				<div className="content-wrapper">
					<Header />
					{this.props.children}
				</div>
			</div>
		);
	}
}

