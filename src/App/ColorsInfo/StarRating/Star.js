import React from 'react';
import "./Star.scss";

const Star = ({light, index, color, onRatingChange}) => {
	const onClick = e => {
		e.preventDefault();

		onRatingChange(color, index + 1);
	}

	return (
		<div className={"picker__star" + (light ? " active" : "")}
		 onClick = {onClick}/>)
}

export default Star;