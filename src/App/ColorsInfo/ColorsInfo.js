import React, {Component} from 'react';

import ColorInfo from "./ColorInfo.js";

const ColorsInfo = ({data = [], onRatingChange, onDelete}) => {

	const createCollection = () => {
		if(data.length === 0) {
			return <p>you have'nt colors in collection</p>
		} else {
			return data.map((curr, i) => 
				(<ColorInfo key={i}
					        onRatingChange={onRatingChange}
					        onDelete={onDelete}
				           {...curr}/>)
			)
		}
		
	}

	return (
		<div className="picker__colors-info">
			{createCollection()}
		</div>
	)
}

export default ColorsInfo;