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
	}

	addColor(data, name, color, rating){
		return [...data, {name, color, rating}]
	}

	sendColor(name, color, rating){
		let {data} = this.state;
		data = this.addColor(data, name, color, rating);
		
		this.setState({
			data
		})
	}

	render() {
		const {data} = this.state;
		return (
			<div id="picker__wrapper">
				<ColorForm sendColor = {this.sendColor} />
				<ColorsInfo data = {data} />
			</div>
		)
	}
}