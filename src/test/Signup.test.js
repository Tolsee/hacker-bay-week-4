import React from 'react';
import { shallow } from 'enzyme';
import Signup from 'components/Signup';

it('should render login form correctly', () => {
  const component = shallow(<Signup />);

  expect(component).toMatchSnapshot();
});