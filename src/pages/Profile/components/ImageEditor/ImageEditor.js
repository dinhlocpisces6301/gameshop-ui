//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userSelector } from '~/store/reducers/userSlice';
import * as imageServices from '~/services/imageServices';
import * as userServices from '~/services/userServices';

import styles from './ImageEditor.module.scss';
import { useNotification } from '~/hooks';
import ToastPortal from '~/components/ToastPortal';
const cx = classNames.bind(styles);
const ImageEditor = forwardRef(({ typeImage }, ref) => {
  useImperativeHandle(ref, () => ({
    show() {
      setShow(true);
    },
  }));
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(process.env.PUBLIC_URL + '/images/avatar-placeholder.jpg');

  const user = useSelector(userSelector);
  const [userData, setUserData] = useState({ preview: process.env.PUBLIC_URL + '/images/avatar-placeholder.jpg' });
  useEffect(() => {
    if (user.data !== undefined) {
      setUserData(user.data);
      if (typeImage === 'avatar') {
        setImage({ preview: imageServices.getImage(userData.avatarPath) });
      }
      if (typeImage === 'wallpaper') {
        setImage({ preview: imageServices.getImage(userData.thumbnailPath) });
      }
    }
  }, [user, userData.avatarPath, userData.thumbnailPath, typeImage]);
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.url);
    };
  }, [image]);

  const toastRef = useRef();
  const Notify = useNotification(toastRef);
  const dispatch = useDispatch();

  const changeImage = async () => {
    console.log(typeImage);
    var response;
    if (typeImage === 'avatar') {
      response = await userServices.changeAvatar(image);
    }
    if (typeImage === 'wallpaper') {
      response = await userServices.changeWallpaper(image);
    }

    if (response.isSuccess === true) {
      Notify('success', 'Change Successfully');
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        dispatch(getUserData());
        setShow(false);
      }, 3000);
    }
    if (response.isSuccess === false) {
      Notify('error', response.message);
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
      }, 3000);
    }
  };
  const handleChangeImage = (e) => {
    changeImage();
  };
  return show ? (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <button onClick={() => setShow(false)} className={cx('button-close')}>
            <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
          </button>
        </div>
        <div className={cx('container')}>
          {typeImage === 'avatar' && <img src={image.preview} alt="" className={cx('avatar-review')} />}
          {typeImage === 'wallpaper' && <img src={image.preview} alt="" className={cx('wallpaper-review')} />}
          <input type="file" className={cx('upload-input')} onChange={handleChangeFile} />
          <div className={cx('action')}>
            <button className={cx('button-cancel')}>Cancel</button>
            <button className={cx('button-confirm')} onClick={handleChangeImage}>
              Change
            </button>
          </div>
        </div>
      </div>
      <ToastPortal ref={toastRef} autoClose={true} />
    </>
  ) : (
    <></>
  );
});

//ImageEditor.propTypes = {}

export default ImageEditor;
