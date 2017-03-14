import { TOGGLE_AMOUNT_INPUT_FORM } from '../actions/index';
const INITIAL_STATE = ['amount-input-form-hidden'];

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case TOGGLE_AMOUNT_INPUT_FORM:
			state.splice(0,state.length)
			return state.concat(action.payload)

		default:
			return state;
	}
}
