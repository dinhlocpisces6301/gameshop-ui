import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login, authSelector } from '~/store/reducers/authSlice';
import ToastPortal from '~/components/ToastPortal';
import config from '~/config';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const toastRef = useRef();
  const addToast = (mode, message) => {
    toastRef.current.addMessage({ mode: mode, message: message });
  };

  const { message, error } = useSelector(authSelector);

  useEffect(() => {
    console.log([message, error]);
    if (error === true) {
      addToast('error', message.content);
    }
    if (error === false) {
      addToast('success', message.content);
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        navigate(config.routes.home, { replace: true });
      }, 3000);
    }
  }, [error, message, navigate]);

  const handleClick = () => {
    dispatch(login());
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
