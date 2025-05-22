jest.mock('aphrodite', () => ({
  css: (...args) => args.join(' '),
  StyleSheet: { create: styles => styles },
  StyleSheetTestUtils: jest.requireActual('aphrodite').StyleSheetTestUtils,
}));
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Header />', () => {
    it('renders an <Header /> component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <Header /> component checking for img', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('renders an <Header /> component checking for heading', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});
