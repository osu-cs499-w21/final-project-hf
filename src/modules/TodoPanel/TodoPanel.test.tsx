import { shallow } from 'enzyme';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mocked } from 'ts-jest/utils';
import { TodoPanel } from './TodoPanel';

jest.mock('react-redux');
const mockUseSelector = mocked(useSelector, true);
mockUseSelector.mockReturnValue({ todos: ['test'] });

const dispatchFn = jest.fn();
const mockUseDispatch = mocked(useDispatch, true);
mockUseDispatch.mockReturnValue(dispatchFn);

describe('TodoPanel module', () => {
  test('renders', () => {
    const wrapper = shallow(<TodoPanel />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
