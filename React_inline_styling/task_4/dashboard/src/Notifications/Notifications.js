import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

// Keyframes for opacity and bounce
const opacityKeyframes = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceKeyframes = {
  '0%': { transform: 'translateY(0px)' },
  '25%': { transform: 'translateY(-5px)' },
  '75%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0px)' },
};

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed var(--holb - red)',
    padding: '24px',
    height: '100vh',
    width: '100vw',
  },
  NotificationUnorderedList: {
    listStyleType: 'none',
  },
  NotificationsListItem: {
    listStyleType: 'disc',
    fontSize: '20px',
    padding: '10px 8px',
    borderBottom: '1px solid black',
  },
  NotificationsButton: {
    float: 'right',
    height: '25px',
    width: '25px',
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
  },
  NotificationsButtonImg: {
    height: '20px',
    width: '20px',
  },
  menuItem: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: '#fff8f8',
    zIndex: 2000,
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
      animationTimingFunction: 'ease-in-out, ease-in-out',
    },
  },
  hide: {
    display: 'none',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(updatedProps, updatedState) {
    if (updatedProps.listNotifications.length > this.props.listNotifications.length)
      return true;
    return false;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} id="menuItem">
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.Notifications)} id="Notifications">
            {listNotifications.length > 0 ? (
              <>
                <button
                  className={css(styles.NotificationsButton)}
                  aria-label="Close"
                  onClick={() => {
                    console.log('Close button has been clicked');
                  }}
                >
                  <img
                    className={css(styles.NotificationsButtonImg)}
                    src={close_icon}
                    alt="Close"
                  />
                </button>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.NotificationUnorderedList)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      className={css(styles.NotificationsListItem)}
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;