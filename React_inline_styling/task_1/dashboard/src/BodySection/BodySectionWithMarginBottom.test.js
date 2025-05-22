jest.mock('aphrodite', () => ({
  css: (...args) => args.join(' '),
  StyleSheet: { create: styles => styles },
  StyleSheetTestUtils: jest.requireActual('aphrodite').StyleSheetTestUtils,
}));
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySectionWithMarginBottom />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct title', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="Test Title" />);
    expect(wrapper.find('h2').text()).toBe('Test Title');
  });

  it('renders children correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Test">
        <p>Child content</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.contains(<p>Child content</p>)).toBe(true);
  });
});