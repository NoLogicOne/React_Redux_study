import React from 'react';
import "./Star.scss";

const Star = ({light}) => {
	return (
		<div className={"picker__star" + (light ? " active" : "")} />)
}

export default Star;