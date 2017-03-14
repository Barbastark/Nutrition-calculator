import React, { Component } from 'react';
import { Link } from 'react-router';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { calculatedResults,
		 toggleSearchBox, 
		 toggleSearchButton,
		 clearFoodItems } from '../../actions/index.js';
// Objects
import { nutrients, rdi, nutrientNames } from '../../global_objects.js';

class CalculatedResults extends Component {
	componentDidMount() {
		this.props.toggleSearchBox([''])
		this.props.toggleSearchButton(['search'])
	}
	componentWillUnmount() {
		this.props.clearFoodItems([]);
		for (let value in nutrients) {
			nutrients[value] = 0;
		}
	}
	renderResults() {
		return this.props.results.map((item) => {
			return( item );
		});
	}
	render() {
		return(
			<div id="calculated-results">
				<Link to='calculator'>
					<img src="../../../img/back.png" alt="back button"/>
					<span>Tillbaka</span>
				</Link>
				<ul>
					{this.renderResults()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		results: state.calculatedResults,
		searchBoxClass: state.toggleSearchBox,
		searchButtonClass: state.toggleSearchButton,
		clearItems: state.addFoodItem
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators ({ calculatedResults,
								 toggleSearchBox, 
								 toggleSearchButton,
								 clearFoodItems }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(CalculatedResults);
