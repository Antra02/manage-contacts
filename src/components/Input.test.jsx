import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Input from './Input';



describe ('<Input />', () => {
  	it('should render correctly', () => {
  	const myModule = shallow(<Input />);
  	expect(mymodule).toMatchSnapshot();
	});
});

