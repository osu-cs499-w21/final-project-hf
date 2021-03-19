import { mount } from 'enzyme';
import React from 'react';
import { TodoPart } from './TodoPart';

describe('TodoPart component', () => {
  test('renders', () => {
    const wrapper = mount(<TodoPart />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
