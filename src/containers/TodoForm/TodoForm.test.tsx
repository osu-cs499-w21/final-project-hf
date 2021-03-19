import { shallow } from 'enzyme';
import React from 'react';
import { TodoForm } from './TodoForm';

describe('TodoForm container', () => {
  test('renders', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<TodoForm addTodo={mockFn} />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
