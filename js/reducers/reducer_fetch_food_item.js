import { FETCH_FOOD_ITEM } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_FOOD_ITEM:
			state.splice(0,state.length)
			return [action.payload.data, ...state];
		default:
			return state;
	}
}