import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
// Remove: import './Notifications.css';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #FF0000',
    padding: '20px',
    position: 'absolute',
    right: '20px',
    top: '20px',
    background: 'white',
    minWidth: '300px',
    zIndex: 100,
  },
  menuItem: {
    textAlign: 'right',
    marginBottom: '10px',
    cursor: 'pointer',
  },
});

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      {!displayDrawer && (
        <div className={css(styles.menuItem)} id="menuItem">
          Your notifications
        </div>
      )}
      {displayDrawer && (
        <div className={css(styles.notifications)} id="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;