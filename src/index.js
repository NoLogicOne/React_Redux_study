import React from 'react';
import {render} from 'react-dom';

import Menu from "./modules/Menu.js";
import data from "./data/recipes.js";
import ColorPicker from "./ColorPicker.js";
// import Summary from "./modules/modules/Summary.js";

{/*render(<Menu recipes={data} title="Delicous Recipes" />, */}
render(<ColorPicker />, 
	   document.getElementById('react-container'))

