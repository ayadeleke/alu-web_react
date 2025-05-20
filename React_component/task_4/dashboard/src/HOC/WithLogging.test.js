import React from 'react';
import { mount } from 'enzyme';
import withLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging /> HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log mount and unmount messages for a plain HTML component', () => {
    const TestComponent = () => <p>Test</p>;
    const ComponentWithLogging = withLogging(TestComponent);

    const wrapper = mount(<ComponentWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component TestComponent is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component TestComponent is going to unmount');
  });

  it('should log mount and unmount messages for Login component', () => {
    const ComponentWithLogging = withLogging(Login);

    const wrapper = mount(<ComponentWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
