import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import ToggleSiteNavReducer from './reducer_toggle_sitenav';
import ToggleSearchBoxReducer from './reducer_toggle_searchbox';
import ToggleSearchInputForm from './reducer_toggle_search_input_form'
import ToggleAmountInputForm from './reducer_toggle_amount_input_form';
import ToggleSearchButtonReducer from './reducer_toggle_search_button';
import ToggleSearchResultsListReducer from './reducer_toggle_search_results_list';
import FoodItemSearchTerm from './reducer_food_item_search_term';
import FetchFoodItem from './reducer_fetch_food_item';
import AddFoodItem from './reducer_add_food_item';
import CalculatedResults from './reducer_calculated_results';

const rootReducer = combineReducers({
	searchResults: SearchReducer,
	toggleSiteNav: ToggleSiteNavReducer,
	toggleSearchBox: ToggleSearchBoxReducer,
	toggleAmountInputForm: ToggleAmountInputForm,
	toggleSearchInputForm: ToggleSearchInputForm,
	toggleSearchButton: ToggleSearchButtonReducer,
	toggleSearchResultsList: ToggleSearchResultsListReducer,
	foodItemSearchTerm: FoodItemSearchTerm,
	fetchFoodItem: FetchFoodItem,
	addFoodItem: AddFoodItem,
	calculatedResults: CalculatedResults
});

export default rootReducer;