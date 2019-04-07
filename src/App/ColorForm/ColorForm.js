import React, {Component} from 'react';

import "./ColorForm.scss";

const ColorForm = ({sendColor}) => {
	// refs for inputs
	// _visual - its variant of customize input[type=color]
	let _color, _title, _rating, _visual;
	
	const submit = (e) => {
		e.preventDefault();
		sendColor(_title.value, _color.value, _rating.value);
		_color.value = "#ff0000";		
		_title.value = "";
		_title.focus();
	}

	const colorChange = (e) => {
		console.log("change!");
		let color = _color.value;

		_visual.style.color = color;
	}

	return (
			<form onSubmit={submit}>
			<label className="picker__form_text">
				<input ref={input => _title = input}
					   type="text"
					   placeholder="color name"
					   required/>
			</label>
			<label className="picker__form_color">
				<input ref={input => _color = input}
					   type="color"
					   onChange={colorChange}
					   required/>
				<span ref={span => _visual = span}>&#9787;</span>
			</label>
			<label className="picker__form_number">
				<input ref={input => _rating = input}
					   type="number"
					   min="0"
					   max="5"
					   required/>
			</label>
				<input type="submit"/>
			</form>
		)	
}

export default ColorForm;

