import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import ToggleSiteNavReducer from './reducer_toggle_sitenav';

const rootReducer = combineReducers({
	searchResults: SearchReducer,
	toggleSiteNav: ToggleSiteNavReducer
});

export default rootReducer;