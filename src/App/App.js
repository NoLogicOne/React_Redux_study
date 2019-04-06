import React, {Component} from 'react';

import ColorForm from "./ColorForm/ColorForm.js";
// import StarRating from "./StarRating/StarRating.js";
import ColorsInfo from "./ColorsInfo/ColorsInfo.js";

export default class App extends Component {
	constructor(props){
		super(props);
	}

	sendColor(title, color){
		console.log("new color!" + title + " - " + color);
	}

	render() {
		return (
			<div id="colors__wrapper">
				<ColorForm sendColor={this.sendColor} />
				<ColorsInfo />
			</div>
		)
	}
}