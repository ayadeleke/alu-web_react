import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  login: {
    margin: '40px 0',
  },
  label: {
    marginRight: '10px',
  },
  input: {
    marginRight: '10px',
  },
});

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input type="email" id="email" name="email" className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" id="password" name="password" className={css(styles.input)} />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default Login;