import React from 'react';
import './Button.css';

// if returns true, it is number
const isOperator = (val) => {
	return !isNaN(val) || val === '.' || val === '=';
};

export const Button = (props) => {
	return (
		<div
			className={`button-wrapper ${isOperator(props.children) ? null : 'operator'}`}
			onClick={() => props.addToInput(props.children)}
		>
			{props.children}
		</div>
	);
};
