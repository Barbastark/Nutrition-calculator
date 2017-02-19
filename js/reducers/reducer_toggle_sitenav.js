import { TOGGLE_SITE_NAV } from '../actions/index';
const INITIAL_STATE = [['site-nav'], [''], ['content-wrapper'], ['overlay-hidden']];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case TOGGLE_SITE_NAV:
		state.splice(0,state.length)
		return state.concat(action.payload);

	default: 
		return state;
	}
}