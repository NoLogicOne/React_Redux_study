import React, {Component} from 'react';

import ColorForm from "./ColorForm/ColorForm.js";

export default class ColorPicker extends Component {
	constructor(props){
		super(props);

		// this.submit = this.submit.bind(this);
	}

	sendColor(title, color){
		console.log("new color!" + title + " - " + color);
	}

	render() {
		return (
			<div id="colors__wrapper">
				<ColorForm sendColor={this.sendColor} />
			</div>
		)
	}
}