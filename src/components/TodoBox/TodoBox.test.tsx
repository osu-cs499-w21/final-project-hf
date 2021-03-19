import { mount } from 'enzyme';
import React from 'react';
import { TodoBox } from './TodoBox';

describe('TodoBox component', () => {
  test('renders', () => {
    const wrapper = mount(<TodoBox />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
