import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faXmark, faGear } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userSelector } from '~/store/reducers/userSlice';

import styles from './ProfileHeader.module.scss';

const cx = classNames.bind(styles);

function ProfileHeader() {
  const [editState, setEditState] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(userSelector);
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
  });
  useEffect(() => {
    if (userInfo.data !== undefined) {
      setUserData(userInfo.data);
    }
  }, [userInfo]);

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('wallpaper')}>
          <img
            alt="wallpaper"
            src={process.env.PUBLIC_URL + `/images/cover-placeholder2.jpg`}
            className={cx('wallpaper-img')}
          />
          {editState && (
            <button type="button" className={cx('wallpaper-button')}>
              <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
              Edit Wallpaper
            </button>
          )}
        </div>
        <div className={cx('avatar')}>
          <img
            alt="avatar"
            src={process.env.PUBLIC_URL + `/images/avatar-placeholder.jpg`}
            className={cx('avatar-img')}
          />
          {editState && (
            <button type="button" className={cx('avatar-button')}>
              <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
            </button>
          )}
        </div>
        <div className={cx('user-info')}>
          <h1 className={cx('user-name')}>{userData.userName}</h1>
          <h1 className={cx('user-fullname')}>{`${userData.lastName || ''} ${userData.firstName || ''}`}</h1>
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
              Edit Pictures
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
