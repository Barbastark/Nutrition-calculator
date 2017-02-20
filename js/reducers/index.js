import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import ToggleSiteNavReducer from './reducer_toggle_sitenav';
import ToggleSearchBoxReducer from './reducer_toggle_searchbox';
import ToggleSearchButtonReducer from './reducer_toggle_search_button';

const rootReducer = combineReducers({
	searchResults: SearchReducer,
	toggleSiteNav: ToggleSiteNavReducer,
	toggleSearchBox: ToggleSearchBoxReducer,
	toggleSearchButton: ToggleSearchButtonReducer
});

export default rootReducer;