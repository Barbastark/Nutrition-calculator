import { TOGGLE_SEARCH_BOX } from '../actions/index';
const INITIAL_STATE = [''];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case TOGGLE_SEARCH_BOX:
		state.splice(0,state.length)
		return state.concat(action.payload);

	default: 
		return state;
	}
}