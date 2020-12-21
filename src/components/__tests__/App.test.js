import  React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App/>', () => {
  const wrapper = shallow(<App/>);
  it('should must match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should have header of app',() => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

});