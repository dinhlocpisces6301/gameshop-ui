import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './RegisterForm.module.scss';

const cx = classNames.bind(styles);

function RegisterForm() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [rePasswordInput, setRePasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('title')}>CREATE YOUR ACCOUNT</div>
        <div className={cx('container')}>
          <>
            <span className={cx('label')}>User Name</span>
            <input
              className={cx('username-input')}
              type="text"
              placeholder="Enter your username"
              value={usernameInput}
              onChange={(e) => {
                setUsernameInput(e.currentTarget.value);
              }}
            />
          </>
          <>
            <span className={cx('label')}>Password</span>
            <input
              className={cx('password-input')}
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.currentTarget.value);
              }}
            />
          </>
          <>
            <span className={cx('label')}>Re-Password</span>
            <input
              className={cx('password-input')}
              type="password"
              placeholder="Re-Password"
              value={rePasswordInput}
              onChange={(e) => {
                setRePasswordInput(e.currentTarget.value);
              }}
            />
          </>
          <>
            <span className={cx('label')}>Email</span>
            <input
              className={cx('email-input')}
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.currentTarget.value);
              }}
            />
          </>
          <button type="text" className={cx('button')}>
            Register
          </button>
          <Link to={config.routes.login} className={cx('link')}>
            Already have an Account?
          </Link>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;