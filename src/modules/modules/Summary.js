import React, {Component} from 'react';

class Summary extends Component {

	static defaultProps = {
		ingredients: 0,
		steps: 0,
		name: "[recipe]"	
	} 
	render() {
		const {ingredients, name, steps} = this.props;
		return (<div className="menu__summary">
				<h4>{name}</h4>
				<span className="menu__summary_ingridients">
					{ingredients} ingredients
				</span> | 
				<span className="menu__summary_steps">
					{" " + steps} steps
				</span>
			</div>)
	}
} 

export default Summary;