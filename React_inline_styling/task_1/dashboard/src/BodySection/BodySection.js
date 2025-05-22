import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Remove: import './BodySection.css';

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px',
  },
});

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className={css(styles.marginBottom)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;