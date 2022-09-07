//import PropTypes from 'prop-types';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './EditProfileTab.module.scss';

const cx = classNames.bind(styles);
function EditProfileTab() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>
          <FontAwesomeIcon icon={faIdCard} className={cx('icon')} />
          edit your profile information
        </h2>
        <div className={cx('content')}>
          <div className={cx('line')}>
            <div className={cx('label')}>Fullname</div>
            <input className={cx('input')} value="Bui Dinh Loc" />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>Nickname</div>
            <input className={cx('input')} value="To Diep" />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>Date of Birth</div>
            <input className={cx('input')} value="06/03/2001" />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>Address</div>
            <input className={cx('input')} value="HMC city, Viet Nam" />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>Phone</div>
            <input className={cx('input')} value="0969819201" />
          </div>
          <div className={cx('action')}>
            <button className={cx('confirm-button')}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}

//EditProfileTab.propTypes = {}

export default EditProfileTab;
