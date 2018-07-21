import React from 'react';
import { shallow } from 'enzyme';
import { Info } from 'components/common/Form';

it('Form elements renders correctly', () => {
  const component = shallow(<Info message="Facebook" type="error" />);

  expect(component).toMatchSnapshot();
  expect(component.prop('message')).toEqual('Facebook');
});