import React from 'react';
import {render} from 'react-dom';

import Menu from "./modules/Menu.js";
import data from "./data/recipes.js";
// import ColorPicker from "./ColorPicker.js";
// import Summary from "./modules/modules/Summary.js";
import StarRating from "./StarRating/StarRating.js";
import Star from "./StarRating/Star.js";

// {render(<Menu recipes={data} title="Delicous Recipes" />, }
render(<StarRating />,
	   document.getElementById('react-container'))
// render(<Star/>,
// 	   document.getElementById('react-container'))

