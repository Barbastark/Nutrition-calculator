import { TOGGLE_SEARCH_BUTTON } from '../actions/index';
const INITIAL_STATE = ['search'];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case TOGGLE_SEARCH_BUTTON:
		state.splice(0,state.length)
		return state.concat(action.payload);

	default: 
		return state;
	}
}