import React, {Component} from 'react';

import StarRating from "./StarRating/StarRating.js";

import "./ColorInfo.scss";

const ColorInfo = ({data}) => {
	const {color = "#00ff00", name = "green", rating} = data;
	
	let colorStyles = {
		backgroundColor: color
	}
	
	return (
		<div className="picker__color-info">
			<h2>{name}</h2>
			<div className="picker__color"
				 style={colorStyles} />
			<StarRating value={rating}/>
		</div>
	)
}

export default ColorInfo;