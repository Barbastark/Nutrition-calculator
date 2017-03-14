import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Containers/components
import SearchBox from '../containers/header_containers/search_box';
import AmountInputBox from '../components/amount_input_box';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Objects
import { nutrients, rdi } from '../global_objects.js';

// Actions
import { toggleSiteNav, 
		 toggleSearchBox, 
		 foodItemSearchTerm, 
		 toggleSearchResultsList, 
		 toggleSearchInputForm,
		 toggleAmountInputForm,
		 addFoodItem 
		} from '../actions/index.js';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { amountInputVal: '' };
	}
	toggleNav() {
		const siteNavHide = [['site-nav'], [''], ['content-wrapper'],['overlay-hidden']]
		const siteNavShow = [['site-nav site-nav-show'], ['open'], ['content-wrapper content-wrapper-hide'], ['overlay']]
		this.props.classNames[0][0] === 'site-nav' ? this.props.toggleSiteNav(siteNavShow) : this.props.toggleSiteNav(siteNavHide)
	}
	toggleSearch() {
				
		this.props.searchBoxClass[0] === '' ?  this.props.toggleSearchBox(['search-box-visible']) : this.props.toggleSearchBox([''])
		this.props.foodItemSearchTerm('')
		this.props.toggleSearchResultsList('search-list-hidden')
			
		setTimeout(() => {
			const inputBox = document.querySelector('.search-box-visible')
			if(inputBox !== null) {
				inputBox.focus()
			}
		},100);
	}
	handleClick() {
		if(isNaN(this.state.amountInputVal) || this.state.amountInputVal < 1) {
			alert('Vänligen ange en siffra som är större än 0')
			this.setState({amountInputVal: ''});
		} else {
			const amount = this.state.amountInputVal;
			const nutrientValues = this.props.foodItem[0].nutrientValues
			const name = this.props.foodItem[0].name
			const id = this.props.foodItem[0].number
					
			this.props.addFoodItem([{name: name,
									 amount: amount,
									 id: id }])
			this.props.toggleAmountInputForm(['amount-input-form-hidden'])
			this.props.toggleSearchInputForm(['search-food-items-form'])
			
			for(let key in nutrients) {
				if(nutrientValues[key] === undefined) {
					nutrientValues[key] = 0;
				}
				nutrients[key] = nutrients[key] + (nutrientValues[key] / 100) * amount
			}

			this.setState({amountInputVal: ''});
			setTimeout(() => {
				document.querySelector('.search-box-visible').focus()
			},100);
		}
	}
	
	render() {
		return(
			<header>
				<div id="nav-icon" 
					 className={this.props.classNames[1][0]}
					 onClick={this.toggleNav.bind(this)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
					<SearchBox 
						searchBoxClass={this.props.searchBoxClass[0]} 
						searchInputFormClass={this.props.searchInputFormClass[0]} />
					<AmountInputBox 
						amountInputClass={this.props.amountInputFormClass[0]} 
						handleClick={this.handleClick.bind(this)} 
						keyDown={(e) => { if (e.keyCode === 13) {
											this.handleClick.bind(this)}}
										}
						amountInputVal={this.state.amountInputVal}
						onInputChange={(e) => {this.setState({amountInputVal: e.target.value});}} />
				<button 
					id="search" 
					className={this.props.searchButtonClass[0]} 
					onClick={this.toggleSearch.bind(this)}>
					<img src={"https://barbastark.github.io/Nutrition-calculator/img/mag_glass.png"} />
				</button>
			</header>
		);
	}
}

function mapStateToProps(state) {
	return { 
		classNames: state.toggleSiteNav,
		searchBoxClass: state.toggleSearchBox,
		searchButtonClass: state.toggleSearchButton,
		amountInputFormClass: state.toggleAmountInputForm,
		searchInputFormClass: state.toggleSearchInputForm,
		foodItem: state.fetchFoodItem
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({ toggleSiteNav, 
								 toggleSearchBox, 
								 foodItemSearchTerm, 
								 toggleSearchResultsList, 
								 toggleAmountInputForm, 
								 toggleSearchInputForm,
								 addFoodItem }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

