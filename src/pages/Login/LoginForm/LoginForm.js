import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('title')}>LOGIN</div>
        <div className={cx('container')}>
          <>
            <span className={cx('username-label')}>User Name</span>
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
            <span className={cx('password-label')}>Password</span>
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
          <button className={cx('button')}>Login</button>
          <Link to={config.routes.forgetPassword} className={cx('link')}>
            Forgot your Password?
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
