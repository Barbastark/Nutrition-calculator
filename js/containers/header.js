import React, { Component } from 'react';
import SearchBox from '../containers/search_box';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { toggleSiteNav } from '../actions/index.js';

class Header extends Component {
	
	toggleNav() {
		const siteNavHide = [['site-nav'], [''], ['content-wrapper'],['overlay-hidden']]
		const siteNavShow = [['site-nav site-nav-show'], ['open'], ['content-wrapper content-wrapper-hide'], ['overlay']]
		
		this.props.classNames[0][0] === 'site-nav' ? this.props.toggleSiteNav(siteNavShow) : this.props.toggleSiteNav(siteNavHide)
	}
	toggleSearchBox() {
		const visible = 'search-box-visible'
		const target = document.querySelector('#search-box')
		target.className === visible ? target.classList.remove(visible) : target.classList.add(visible)
	}
	render() {
	
		return(
			<header>
				<div id="nav-icon" className={this.props.classNames[1][0]}
					 onClick={this.toggleNav.bind(this)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<SearchBox />
				<div id="search" className="search" onClick={this.toggleSearchBox.bind(this)}>
					<img src={"https://barbastark.github.io/Nutrition-calculator/img/mag_glass.png"} />
				</div>
			</header>
		);
	}
}

function mapStateToProps(state) {
	return { classNames: state.toggleSiteNav }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({toggleSiteNav}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

