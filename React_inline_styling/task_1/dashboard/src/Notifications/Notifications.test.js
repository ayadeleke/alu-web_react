jest.mock('aphrodite', () => ({
  css: (...args) => args.join(' '),
  StyleSheet: { create: styles => styles },
  StyleSheetTestUtils: jest.requireActual('aphrodite').StyleSheetTestUtils,
}));
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
];

describe('<Notifications />', () => {
  it('does display the menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('#menuItem')).toHaveLength(1);
  });

  it('does not display div#Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('#Notifications')).toHaveLength(0);
  });

  it('does display the menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('#menuItem')).toHaveLength(0);
  });

  it('does display div#Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('#Notifications')).toHaveLength(1);
  });

  it('renders 3 NotificationItem components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders "No new notification for now" if listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).props().value).toEqual('No new notification for now');
  });
});
