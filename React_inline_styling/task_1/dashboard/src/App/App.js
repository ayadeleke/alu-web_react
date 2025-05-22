import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    padding: '40px 24px',
    minHeight: 'calc(100vh - 200px)',
    position: 'relative',
  },
  appFooter: {
    fontStyle: 'italic',
    borderTop: '4px solid #FF0000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '5vmin',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    background: '#fff',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const htmlObj = getLatestNotification();
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New course available' },
      { id: 3, type: 'urgent', html: htmlObj },
    ];

    return (
      <>
        <Notifications displayDrawer={false} listNotifications={listNotifications} />
        <div className={css(styles.appBody)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Graduation date is January 28th!</p>
          </BodySection>
        </div>
        <footer className={css(styles.appFooter)}>
          <Footer />
        </footer>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default hot(module)(App);