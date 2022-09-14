import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faXmark, faGear } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as imageServices from '~/services/imageServices';
import { getUserData, userSelector } from '~/store/reducers/userSlice';

import styles from './ProfileHeader.module.scss';
import ImageEditor from '../ImageEditor';
const cx = classNames.bind(styles);

function ProfileHeader() {
  const [editState, setEditState] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
  });
  useEffect(() => {
    if (user.data !== undefined) {
      setUserData(user.data);
    }
  }, [user]);
  const imgRef = useRef();
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('wallpaper')}>
          <img alt="wallpaper" src={imageServices.getImage(userData.thumbnailPath)} className={cx('wallpaper-img')} />
          {editState && (
            <>
              <button type="button" className={cx('wallpaper-button')}>
                <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
                Edit Wallpaper
                <input type="file" />
              </button>
            </>
          )}
        </div>
        <div className={cx('avatar')}>
          <img alt="avatar" src={imageServices.getImage(userData.avatarPath)} className={cx('avatar-img')} />
          {editState && (
            <>
              <button type="button" className={cx('avatar-button')}>
                <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
              </button>
            </>
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
      {true && <ImageEditor ref={imgRef} />}
    </>
  );
}

export default ProfileHeader;
