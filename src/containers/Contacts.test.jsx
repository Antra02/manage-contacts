import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Contacts from './Contacts';

describe('Contact page test', () => { 

  it('it should render contact lists', () => {
    const props = {
    	test: '',
    }
    const myModule = shallow(<Contacts {...props} />);
    expect(myModule).toMatchSnapshot();
  });    

});
