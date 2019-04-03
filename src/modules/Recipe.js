import React from 'react';

import Summary from "./modules/Summary.js";
import Ingridient from "./modules/Ingridient.js";
import Instructions from "./modules/Instructions.js";

const Recipe = ({name, ingredients, steps}) => (
	<section id={name.toLowerCase().replace(/\s/g, "-")}>
		<Summary name={name}
				 ingredients={ingredients.length}
				 steps={steps.length} />
				 		
		<h3>{name}</h3>
		<ul>
			{
				ingredients.map((ingridient, i) => (
					<Ingridient key={i} 
								{...ingridient} />
				))
			}
		</ul>
		<Instructions steps={steps} />
		
	</section>	
);
	
export default Recipe; 