import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { toggleSearchBox, toggleSearchButton } from '../actions/index.js';

class Home extends Component {
	componentDidMount() {
		const searchButtonHidden = ['search']
		const searchBoxHidden = ['']
		
		if (this.props.searchButtonClass[0] !== 'search') {
			this.props.toggleSearchButton(searchButtonHidden)
		}
		if (this.props.searchBoxClass[0] !== '') {
			this.props.toggleSearchBox(searchBoxHidden)
		}
	}
	render() {
		return(
			<h1>Home</h1>
		);
	}
}

function mapStateToProps(state) {
	return { 
		searchButtonClass: state.toggleSearchButton,
		searchBoxClass: state.toggleSearchBox 
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({ toggleSearchBox, toggleSearchButton}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);