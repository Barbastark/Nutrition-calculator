import { TOGGLE_SEARCH_INPUT_FORM } from '../actions/index';

const INITIAL_STATE = ['search-food-items-form'];

export default function (state = INITIAL_STATE, action) {

	switch(action.type) {
		case TOGGLE_SEARCH_INPUT_FORM:
			state.splice(0,state.length)
			return state.concat(action.payload)


		default:
			return state;
	}
}