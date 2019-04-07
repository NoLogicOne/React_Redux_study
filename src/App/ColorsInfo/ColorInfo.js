import React, {Component} from 'react';

import StarRating from "./StarRating/StarRating.js";

import "./ColorInfo.scss";

const ColorInfo = ({color = "#00ff00", 
					name = "green", 
					rating,
					onDelete,
					onRatingChange
				}) => {
	
	let colorStyles = {
		backgroundColor: color
	}

	const onClick = (e) => {
		onDelete(color);
	}


	
	return (
		<div className="picker__color-info">
			<h2>{name}
				<span
					onClick={onClick}
				>&#10006;</span>
			</h2>
			<div className="picker__color"
				 style={colorStyles} />
			<StarRating value={rating}
						onRatingChange={onRatingChange}
						color={color}/>
		</div>
	)
}

export default ColorInfo;