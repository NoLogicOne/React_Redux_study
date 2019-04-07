import React, {Component} from 'react';

import ColorForm from "./ColorForm/ColorForm.js";
import ColorsInfo from "./ColorsInfo/ColorsInfo.js";

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: this.props.data
		}

		this.sendColor = this.sendColor.bind(this);
		this.onRatingChange = this.onRatingChange.bind(this);
		this.executeColor = this.executeColor.bind(this);
	}

	addColor(data, name, color, rating){
		return [...data, {name, color, rating}]
	}

	sendColor(name, color, rating){
		let {data} = this.state;
		data = this.addColor(data, name, color, rating);
		data = this.sortColorsByRating(data);
		
		this.setState({
			data
		})
	}

	executeColor(color, callback){
		let {data} = this.state;

		return data.map(curr => {
			if(curr.color !== color){
				return curr;
			} else {
				return callback(curr);
			}
		})
	}

	sortColorsByRating(data){
		return	data.sort((a, b) => {return (a.rating > b.rating) 
					? -1
				    : 1})
		
	}

	onRatingChange(color, rating){		
			const changeRating = (data) => {
				return {...data, rating};
			}

			let data = this.executeColor(color, changeRating);
			data = this.sortColorsByRating(data);
			
			this.setState({data});
	}

	render() {
		const {data} = this.state;
		return (
			<div id="picker__wrapper">
				<ColorForm sendColor = {this.sendColor} />
				<ColorsInfo data = {data}
							onRatingChange={this.onRatingChange} />
			</div>
		)
	}
}