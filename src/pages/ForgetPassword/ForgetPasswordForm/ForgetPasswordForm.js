import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
// import { Link } from 'react-router-dom';
// import config from '~/config';
import styles from './ForgetPasswordForm.module.scss';

const cx = classNames.bind(styles);

function ForgetPasswordForm() {
  const [userInput, setUserInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [rePasswordInput, setRePasswordInput] = useState('');

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('title')}>RESET PASSWORD</div>
        <div className={cx('container')}>
          <>
            <span className={cx('label')}>Email or Username</span>
            <input
              className={cx('username-input')}
              type="text"
              placeholder="Enter your Email or Username"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.currentTarget.value);
              }}
            />
          </>
          <>
            <span className={cx('label')}>New Password</span>
            <input
              className={cx('password-input')}
              type="password"
              placeholder="New Password"
              value={newPasswordInput}
              onChange={(e) => {
                setNewPasswordInput(e.currentTarget.value);
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
          <button type="button" className={cx('button')}>
            Submit
          </button>
          <Link to={config.routes.login} className={cx('link')}>
            Back to Login!
          </Link>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordForm;
