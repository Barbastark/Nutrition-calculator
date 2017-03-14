import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SearchListItem from '../../components/search_list_item';
import { Link, IndexLink } from 'react-router';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Objects
import { nutrients, rdi, nutrientNames } from '../../global_objects.js';

// Actions
import { removeFoodItem, 
		 fetchFoodItem,
		 calculatedResults } from '../../actions/index.js';


class FoodItemsList extends Component {
	removeListItem(e) {
		const id = parseInt(e.target.id)
		const amount = parseInt(e.target.className)
		const nutrientValues = this.props.foodItem[0].nutrientValues

		this.props.fetchFoodItem(id);
							
		for(let key in nutrients) {

			if(nutrientValues[key] === undefined) {
				nutrientValues[key] = 0;
			}
			nutrients[key] = nutrients[key] - nutrientValues[key] / 100 * amount;
		}
		
		this.props.removeFoodItem(e.target.id)
	}
	calculate() {
		const calculatedResults = []
		let i = 0;
					
		for(let key in nutrients) {
				calculatedResults.push(
					<li key={i}>
						<span>{nutrientNames[i]}</span>
						<span>{(nutrients[key] * 100 / rdi[key]).toFixed(1)}%</span>
					</li>)
				i++
			}
		this.props.calculatedResults(calculatedResults);
	}
	renderFoodItems() {
		return this.props.foodItems.map((item) => {
			return(
				<li className="food-list-item"
					key={item.id}>
					<span>
						  {`${item.name} ${item.amount}g`}
					</span>
					<button onClick={ e => this.removeListItem(e) }>
						<img src="./img/ic_cross.png" 
							 alt="remove item"
							 id={item.id} 
							 className={item.amount} />
					</button>
				</li>
			);
		});
	}
	render() {
		const transitionOptions = {
			  transitionName: 'fade',
			  transitionEnterTimeout: 500,
			  transitionLeaveTimeout: 500
		};
		return(
			<div id='food-items-list'>
				<ul>
					<ReactCSSTransitionGroup {...transitionOptions}>
					  {this.renderFoodItems()}
					</ReactCSSTransitionGroup>
				</ul>
				<Link to={"/calculatedresults"} 
					  onClick={this.calculate.bind(this)}>
					Beräkna
				</Link>
			</div>
		);	
	}
}

function mapStateToProps(state) {
	return { foodItem: state.fetchFoodItem,
			 foodItems: state.addFoodItem
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators ({ removeFoodItem,
								 fetchFoodItem,
								 calculatedResults }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodItemsList);