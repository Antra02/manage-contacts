import React from 'react';
import PropTypes from 'prop-types';

 export default function Button ({label, className, type, onClick}) {
	return (
		<button 
			className={className}
			type={type}
			onClick={onClick}
			style={{ margin: '2rem' }}
		>
			{label}
		</button>
	);
}

Button.defaultProps = {
	className: '',
	type: '',
	label: '',
};
Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
};

