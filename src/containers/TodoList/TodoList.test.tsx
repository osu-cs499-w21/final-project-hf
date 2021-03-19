import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from './TodoList';

describe('TodoList container', () => {
  test('renders', () => {
    const wrapper = shallow(<TodoList todos={['test']} />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
