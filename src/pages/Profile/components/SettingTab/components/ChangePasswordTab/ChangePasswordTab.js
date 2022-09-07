//import PropTypes from 'prop-types';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './ChangePasswordTab.module.scss';

const cx = classNames.bind(styles);
function ChangePasswordTab() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>
          <FontAwesomeIcon icon={faLock} className={cx('icon')} />
          change password
        </h2>
        <div className={cx('content')}>
          <div className={cx('line')}>
            <div className={cx('label')}>Password</div>
            <input className={cx('input')} type="password" />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>New Password</div>
            <input className={cx('input')} type="password" />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>Re-Password</div>
            <input className={cx('input')} type="password" />
          </div>
          <div className={cx('action')}>
            <button className={cx('confirm-button')}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}

//ChangePasswordTab.propTypes = {}

export default ChangePasswordTab;
