import { FETCH_SEARCH_RESULTS } from '../actions/index';
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_SEARCH_RESULTS:
		state.splice(0,state.length)
		return [action.payload.data, ...state];
	default: 
		return state;
	}
}