import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '4px solid #FF0000',
    padding: '20px 0',
  },
  logo: {
    height: '200px',
    marginRight: '20px',
  },
  h1: {
    color: '#FF0000',
    fontSize: '2.5rem',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;