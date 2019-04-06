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
				<input ref={input => _title = input}
					   type="text"
					   placeholder="color name"
					   required/>
				<input ref={input => _color = input}
					   type="color"
					   required/>
				<input ref={input => _rating = input}
					   type="number"
					   required/>
				<input type="submit"/>
			</form>
		)	
}

export default ColorForm;

