import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, className, type, onChange, value, placeholder}) => {
	return (
		<input 
			className={className}
			type={type}
			onChange={onChange}
			value={value}
			name={name}
			placeholder={placeholder}
		>
		</input>
	);
}

Input.defaultProps = {
	className: 'form-control my-3',
	type: '',
	name: '',
	value: 0,
	placeholder: '',
};
Input.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.number,
	placeholder: PropTypes.string,
};

export default Input;