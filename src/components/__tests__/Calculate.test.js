import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculate from '../Calculate';

// afterEach(() => {
//   wrapper.unmount();
//  });
describe('<Calculate/>', () => {
 const wrapper = shallow(<Calculate/>);
 it('should must match the snapshot', () => {
   expect(wrapper.html()).toMatchSnapshot();
 });


 it('should have mortgage amount field', () => {
  expect(wrapper.find('input[type="number"]').length).toBeGreaterThan(1);
 });

 it('should have proper props for mortgage amount field', () => {
  expect(wrapper.find('input[type="number"]').at(0).props()).toEqual({
    type:"number",
    id:"mortgageAmount", 
    min:"50000",
    max:"750000",
    step:"1000",
    onChange : expect.any(Function),
    value: undefined
  });
 });


 it('should have proper props for pre-deposit amount field', () => {
  expect(wrapper.find('input[type="number"]').at(1).props()).toEqual({
    type:"number",
    id:"prePayment",
    min:"1000",
    max:"150000",
    step:"1000",
    "value": undefined,
    "onChange": expect.any(Function)
  });
 });

 it('should have proper props for Mortgage period field', () => {
    expect(wrapper.find('input[type="range"]').at(0).props()).toEqual({
    type:"range",
    id:"mortgagePeriod",
    min:"5",
    max:"35",
    step:"1",
    "className": "grid__item--range-slider",
    "value": undefined,
    "onChange": expect.any(Function)		
  });
 });

 it('should have proper props Interest field', () => {
    expect(wrapper.find('input[type="range"]').at(1).props()).toEqual({
    type:"range",
    id:"interestRate",
    min:"0.1",
    max:"8",
    "className": "grid__item--range-slider",
    step:"0.1",
    "value": undefined,
    "onChange": expect.any(Function)		
  });
 });
});