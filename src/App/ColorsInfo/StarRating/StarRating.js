import React, {Component} from 'react';

import Star from "./Star.js";

const StarRating = ({value = 3}) => {
	
	const createStars = () => {
		return  [...Array(5)].map( 
					(curr, i) => (
						<Star key = {i} 
					          light={value > i}/>
					)
				)
	}

	return (
		<div className = "picker__rating">
			{createStars()}
		</div>
	)
}

export default StarRating;