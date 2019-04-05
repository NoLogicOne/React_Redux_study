import React from 'react';
import {render} from 'react-dom';

import data from "./data/recipes.js";

import App from "./App/App.js";

render(<App />,
	   document.getElementById('react-container'))

