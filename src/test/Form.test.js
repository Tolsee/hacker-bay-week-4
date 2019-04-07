import React from 'react';
import { shallow } from 'enzyme';
import { Info } from 'components/common/Form';

it('Info renders correctly', () => {
  const component = shallow(<Info message="Error message" type="error" />);

  expect(component).toMatchSnapshot();
  expect(component.prop('message')).toEqual('Error message');
});