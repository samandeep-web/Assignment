import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';

describe('<Dashboard/>', () => {
  const wrapper = shallow(<Dashboard/>);
  it('should must match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});