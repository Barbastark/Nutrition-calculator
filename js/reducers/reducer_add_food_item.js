import { ADD_FOOD_ITEM } from '../actions/index';
import { REMOVE_FOOD_ITEM } from '../actions/index';
import { CLEAR_FOOD_ITEMS } from '../actions/index';
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case ADD_FOOD_ITEM:
			return state.concat(action.payload)
		case REMOVE_FOOD_ITEM: 
			let payload = parseInt(action.payload)
			for(let i = 0; i < state.length; i++) {
				if(state[i].id === payload) {
					state.splice(i, 1)
					break;
				}
			}
			return state;
		case CLEAR_FOOD_ITEMS:
			state.splice(0,state.length)
			return state.concat(action.payload)
		default:
			return state
		}
}
