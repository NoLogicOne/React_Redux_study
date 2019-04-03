import React from 'react';

const Instructions = ({steps}) => 
	(<div className="instructions">
		<h3>Cooking instructions</h3>
		<div>
		{
			steps.map((step, i) => (
				<p key={i}>
					{step}
				</p>
			))
		}
		</div>
	</div>)

export default Instructions; 