import axios from 'axios';

const ROOT_URL = 'http://www.matapi.se';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const FETCH_FOOD_ITEM = 'FETCH_FOOD_ITEM';
export const TOGGLE_SITE_NAV = 'TOGGLE_SITE_NAV';
export const TOGGLE_SEARCH_BOX = 'TOGGLE_SEARCH_BOX';
export const TOGGLE_AMOUNT_INPUT_FORM = 'TOGGLE_AMOUNT_INPUT_FORM';
export const TOGGLE_SEARCH_INPUT_FORM = 'TOGGLE_SEARCH_INPUT_FORM';
export const TOGGLE_SEARCH_BUTTON = 'TOGGLE_SEARCH_BUTTON';
export const TOGGLE_SEARCH_RESULTS_LIST = 'TOGGLE_SEARCH_RESULTS_LIST';
export const FOOD_ITEM_SEARCH_TERM = 'FOOD_ITEM_SEARCH_TERM';
export const ADD_FOOD_ITEM = 'ADD_FOOD_ITEM';
export const REMOVE_FOOD_ITEM = 'REMOVE_FOOD_ITEM';
export const CALCULATED_RESULTS = 'CALCULATED_RESULTS';
export const CLEAR_FOOD_ITEMS = 'CLEAR_FOOD_ITEMS';

export function fetchSearchResults(term) {
	const request = axios.get(`${ROOT_URL}/foodstuff?query=${term}`);
	return {
		type: FETCH_SEARCH_RESULTS,
		payload: request
	};
}

export function fetchFoodItem(id) {
	const request = axios.get(`${ROOT_URL}/foodstuff/${id}`);
	return {
		type: FETCH_FOOD_ITEM,
		payload: request
	};
}

export function toggleSiteNav(classNames) {
	return {
		type: TOGGLE_SITE_NAV,
		payload: classNames 
	};
}

export function toggleSearchBox(className) {
	return {
		type: TOGGLE_SEARCH_BOX,
		payload: className 
	};
}

export function toggleAmountInputForm(className) {
	return {
		type: TOGGLE_AMOUNT_INPUT_FORM,
		payload: className
	};
}

export function toggleSearchInputForm(className) {
	return {
		type: TOGGLE_SEARCH_INPUT_FORM,
		payload: className
	};
}

export function toggleSearchButton(className) {
	return {
		type: TOGGLE_SEARCH_BUTTON,
		payload: className 
	};
}

export function toggleSearchResultsList(className) {
	return {
		type: TOGGLE_SEARCH_RESULTS_LIST,
		payload: className
	};
}

export function foodItemSearchTerm(term) {
	return {
		type: FOOD_ITEM_SEARCH_TERM,
		payload: term
	};
}

export function addFoodItem(item) {
	return {
		type: ADD_FOOD_ITEM,
		payload: item
	};
}

export function removeFoodItem(id) {
	return {
		type: REMOVE_FOOD_ITEM,
		payload: id
	};
}

export function clearFoodItems(item) {
	return {
		type: CLEAR_FOOD_ITEMS,
		payload: item
	};
}

export function calculatedResults(results) {
	return {
		type: CALCULATED_RESULTS,
		payload: results
	};
}

