// React
import React, { Component } from 'react';

// Containers & Components
import Header from './header.js';
import SiteNav from './site_nav';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { toggleSiteNav } from '../actions/index.js';

class App extends Component {
	render(){
		return (
			<div id="site-wrapper">
				<div id="arsle" className={this.props.classNames[3][0]}>
				</div>
				<SiteNav />
				<div className={this.props.classNames[2][0]}>
					<Header />
					{this.props.children}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { classNames: state.toggleSiteNav }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators ({toggleSiteNav}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
