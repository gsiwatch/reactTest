import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  // shallow takes Jsx
  const wrapper = shallow(<App/>);
  // in case we want to debug it
  // then we can do it like this
  // console.log(wrapper.debug());
  
  const appComponent = wrapper.find("[data-test='component-big-component']");
  // we expect to find one element
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter starts at 0', () => {});

test('clicking button increments counter display', () => {});
/**
 * benefits enzyme:
 *    1. we can use jquery seletor to target specific element
 *    2. simulate events on the DOM
 *    3. it has a concept of shallow randering (one level deep) vs
 *          mount
 *    4. provides access to props and state
 *    npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16
 */

