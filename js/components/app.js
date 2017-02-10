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
				<div className="content-wrapper">
					<Header />
					<p>Lorem ipsum dolor sit amet, est et nisl putent, eam fugit epicuri in, duo ad velit nominati euripidis. His congue soleat necessitatibus eu, et vix paulo mentitum. No porro similique per, per no animal discere platonem. Nec tempor mentitum eu, et mei vocibus explicari. In ullum disputando pro, ad mea invenire consequat temporibus, eum id causae recusabo temporibus.
					Lorem ipsum dolor sit amet, est et nisl putent, eam fugit epicuri in, duo ad velit nominati euripidis. His congue soleat necessitatibus eu, et vix paulo mentitum. No porro similique per, per no animal discere platonem. Nec tempor mentitum eu, et mei vocibus explicari. In ullum disputando pro, ad mea invenire consequat temporibus, eum id causae recusabo temporibus.
					Lorem ipsum dolor sit amet, est et nisl putent, eam fugit epicuri in, duo ad velit nominati euripidis. His congue soleat necessitatibus eu, et vix paulo mentitum. No porro similique per, per no animal discere platonem. Nec tempor mentitum eu, et mei vocibus explicari. In ullum disputando pro, ad mea invenire consequat temporibus, eum id causae recusabo temporibus.
	
					</p>
				</div>
				
			</div>
		);
	}
}

