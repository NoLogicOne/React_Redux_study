import React, {Component} from 'react';

import ColorInfo from "./ColorInfo.js";

const ColorsInfo = () => {

	const testedData = {
		color: "#0000ff",
		name: "blue!",
		rating: 5
	}

	return (
		<div className="picker__colors-info">
			<ColorInfo {...testedData}/>
		</div>
	)
}

export default ColorsInfo;