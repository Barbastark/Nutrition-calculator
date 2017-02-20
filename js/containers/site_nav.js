import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { toggleSiteNav } from '../actions/index.js';

class SiteNav extends Component {
	toggleNav() {
		const siteNavHide = [['site-nav'], [''], ['content-wrapper'],['overlay-hidden']];
				
		this.props.toggleSiteNav(siteNavHide);
	}
	render() {
		return (
			<div className={this.props.classNames[0][0]}>
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
function mapStateToProps(state) {
	return { classNames: state.toggleSiteNav }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators ({toggleSiteNav}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SiteNav);