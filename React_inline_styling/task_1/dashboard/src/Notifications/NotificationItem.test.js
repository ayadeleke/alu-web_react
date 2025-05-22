/**
 * @jest-environment jsdom
 */
jest.mock('aphrodite', () => ({
  css: (...args) => args.join(' '),
  StyleSheet: { create: styles => styles },
  StyleSheetTestUtils: jest.requireActual('aphrodite').StyleSheetTestUtils,
}));
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
    it('renders an <NotificationItem /> component', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <NotificationItem /> component with type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.props()['data-notification-type']).toEqual('default');
        expect(wrapper.text()).toEqual('test');
        expect(wrapper.html()).toContain('<li data-notification-type="default"');
        expect(wrapper.html()).toContain('test</li>');
    });

    it('renders an <NotificationItem /> component checking for html pass through', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });

    // Remove or refactor the markAsRead test if NotificationItem is a function component
});
