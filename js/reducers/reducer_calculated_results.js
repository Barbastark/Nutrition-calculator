import { CALCULATED_RESULTS } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case CALCULATED_RESULTS: 
			state.splice(0, state.length)
			return state.concat(action.payload);

		default: 
			return state;
	}
}