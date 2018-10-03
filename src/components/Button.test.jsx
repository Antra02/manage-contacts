import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';
import Adapter from 'enzyme-adapter-react-15';

describe ('<Button />', () => {
  it('should render correctly', () => {
  	const myModule = shallow(<Button />);
  	expect(mymodule).toMatchSnapshot();
  });
});

