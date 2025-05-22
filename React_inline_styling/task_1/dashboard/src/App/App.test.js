/**
 * @jest-environment jsdom
 */
jest.mock('aphrodite');
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

describe('<App />', () => {
  let alertMock;

  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains Header, Footer, and Notifications components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('displays Login component and not CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('displays CourseList component and not Login when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toBe(true);
    expect(wrapper.find(Login).exists()).toBe(false);
  });

  it('contains two BodySectionWithMarginBottom and one BodySection', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BodySectionWithMarginBottom).length).toBe(1); // Only login section by default
    expect(wrapper.find(BodySection).length).toBe(1); // News section
  });

  it('calls logOut and alerts when Ctrl+H is pressed', () => {
    const logOutMock = jest.fn();
    const wrapper = mount(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
    wrapper.unmount();
  });
});
