jest.mock('aphrodite', () => ({
  css: (...args) => args.join(' '),
  StyleSheet: { create: styles => styles },
  StyleSheetTestUtils: jest.requireActual('aphrodite').StyleSheetTestUtils,
}));
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Login />', () => {
    it('renders an <Login /> component checking for App-Login', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <Login /> component checking for input', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('renders an <Login /> component checking for label', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
