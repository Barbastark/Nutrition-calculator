import { FOOD_ITEM_SEARCH_TERM} from '../actions/index';

const INITIAL_STATE = '';

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
	case FOOD_ITEM_SEARCH_TERM:
		state = action.payload
		return state;

	default:
		return state;
	}
}