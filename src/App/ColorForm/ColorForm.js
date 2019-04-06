import React, {Component} from 'react';

import "./ColorForm.scss";

const ColorForm = ({sendColor}) => {
	let _color, _title, _rating;
	
	const submit = (e) => {
		e.preventDefault();
		sendColor(_title.value, _color.value, _rating.value);
		_color.value = "#ff0000";		
		_title.value = "";
		_title.focus();
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
					   required/>
			</label>
			<label className="picker__form_number">
				<input ref={input => _rating = input}
					   type="number"
					   required/>
				<input type="submit"/>
			</label>
			</form>
		)	
}

export default ColorForm;

