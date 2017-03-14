import { TOGGLE_SEARCH_RESULTS_LIST } from '../actions/index';

const INITIAL_STATE = ['search-list-hidden'];

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case TOGGLE_SEARCH_RESULTS_LIST:
			state.splice(0,state.length)
			return state.concat(action.payload);

		default:
			return state;
	}
}
