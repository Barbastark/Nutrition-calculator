import axios from 'axios';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const TOGGLE_SITE_NAV = 'TOGGLE_SITE_NAV';
export const TOGGLE_SEARCH_BOX = 'TOGGLE_SEARCH_BOX';

const ROOT_URL = 'http://www.matapi.se';

export function fetchSearchResults(term) {
	const request = axios.get(`${ROOT_URL}/foodstuff?query=${term}`);
	return {
		type: FETCH_SEARCH_RESULTS,
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

