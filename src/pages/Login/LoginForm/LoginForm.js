import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import ToastPortal from '~/components/ToastPortal';
import config from '~/config';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const toastRef = useRef();
  const addToast = (mode, message) => {
    toastRef.current.addMessage({ mode: mode, message: message });
  };

  const handleClick = () => {
    addToast('success', 'Username or Password has been wrong!');
  };

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
          <button className={cx('button')} onClick={handleClick}>
            Login
          </button>
          <Link to={config.routes.forgetPassword} className={cx('link')}>
            Forgot your Password?
          </Link>
        </div>
      </div>
      <ToastPortal ref={toastRef} autoClose={true} />
    </>
  );
}

export default LoginForm;
