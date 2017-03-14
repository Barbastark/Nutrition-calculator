import React, { Component } from 'react'

//Containers
import CalculatorSearchList from '../containers/calculator_containers/calculator_search_list';
import FoodItemsList from '../containers/calculator_containers/food_items_list';

export default class Calculator extends Component {
	render() {
		return(
			<div>
				<CalculatorSearchList />
				<FoodItemsList />
			</div>
		);
	}
}