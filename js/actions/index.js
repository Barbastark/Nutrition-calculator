import axios from 'axios';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
const ROOT_URL = 'http://www.matapi.se';

export function fetchSearchResults(term) {
	const request = axios.get(`${ROOT_URL}/foodstuff?query=${term}`);
	return {
		type: FETCH_SEARCH_RESULTS,
		payload: request
	};
}