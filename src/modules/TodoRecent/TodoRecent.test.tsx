import { shallow } from 'enzyme';
import React from 'react';
import { useSelector } from 'react-redux';
import { mocked } from 'ts-jest/utils';
import { TodoRecent } from './TodoRecent';

jest.mock('react-redux');
const mockUseSelector = mocked(useSelector, true);
mockUseSelector.mockReturnValue({ todos: ['test'] });

describe('TodoRecent module', () => {
  test('renders', () => {
    const wrapper = shallow(<TodoRecent />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
