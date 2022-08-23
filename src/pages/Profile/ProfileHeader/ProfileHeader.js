import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCaretDown, faXmark, faGear } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ProfileHeader.module.scss';

const cx = classNames.bind(styles);

function ProfileHeader() {
  const [editState, setEditState] = useState(false);

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('wallpaper')}>
          <img alt="wallpaper" src={process.env.PUBLIC_URL + `/images/wallpaper.jpg`} className={cx('wallpaper-img')} />
          {editState && (
            <button type="button" className={cx('wallpaper-button')}>
              <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
              Edit Wallpaper
            </button>
          )}
        </div>
        <div className={cx('avatar')}>
          <img alt="avatar" src={process.env.PUBLIC_URL + `/images/avatar.jpg`} className={cx('avatar-img')} />
          {editState && (
            <button type="button" className={cx('avatar-button')}>
              <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
            </button>
          )}
        </div>
        <div className={cx('user-info')}>
          <h1 className={cx('user-name')}>
            Tô Diệp
            <FontAwesomeIcon icon={faCaretDown} className={cx('icon')} />
          </h1>
          <h1 className={cx('user-fullname')}>(Bùi Đình Lộc)</h1>
          {editState ? (
            <button
              type="button"
              className={cx('cancel-button')}
              onClick={() => {
                setEditState(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
              Cancel
            </button>
          ) : (
            <button
              type="button"
              className={cx('edit-button')}
              onClick={() => {
                setEditState(true);
              }}
            >
              <FontAwesomeIcon icon={faGear} className={cx('icon')} />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
