// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import SearchListItem from './search_list_item';

export default class AmountInputBox extends Component {
	componenDidMount() {
       this.textInput.focus();
  	}
	render() {
		return(
			<form 
				className={this.props.amountInputClass} 
				onSubmit={this.onFormSubmit} 
				autoComplete="off">
				<input 
					id="input_amount"
					className="input-amount"
					type="text" 
					placeholder="mängd i gram"
					value={this.props.amountInputVal}
					onChange={this.props.onInputChange} 
					onKeyDown={this.props.keyDown}
					ref={(input) => { this.textInput = input; }}/>
				<button 
					type="submit" 
					onClick={this.props.handleClick}>
					Lägg till
				</button>
			</form>
		);
	}
}
