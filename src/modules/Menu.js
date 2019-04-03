import React from 'react';

import Recipe from "./Recipe.js";

import './menu.scss';

const Menu = ({title, recipes}) => (
	<article className="menu__main">
		<header>
			<h2>{title}</h2>
		</header>

		<div className="recipes">
			{
				recipes.map( (recipe, i) => 
					(<Recipe key = {i} {...recipe}/>)
				)
			}
		</div>

	</article>
)

export default Menu; 