//import PropTypes from 'prop-types';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userSelector } from '~/store/reducers/userSlice';
import * as userServices from '~/services/userServices';

import styles from './EditProfileTab.module.scss';
import { useNotification } from '~/hooks';
import ToastPortal from '~/components/ToastPortal';

const cx = classNames.bind(styles);
function EditProfileTab() {
  const dispatch = useDispatch();
  const userInfo = useSelector(userSelector);
  const toastRef = useRef();
  const Notify = useNotification(toastRef);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (userInfo.data !== undefined) {
      setFirstName(userInfo.data.firstName);
      setLastName(userInfo.data.lastName);
      setDob(userInfo.data.dob);
      setphoneNumber(userInfo.data.phoneNumber);
    }
  }, [userInfo]);

  const editProfile = async () => {
    setLoading(true);
    const response = await userServices.editProfile({
      id: userInfo.data.id,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: userInfo.data.email,
      phoneNumber: phoneNumber,
    });
    if (response.isSuccess === false) {
      setLoading(false);
      Notify('error', response.message);
    }
    if (response.isSuccess === true) {
      const timerId = setTimeout(() => {
        dispatch(getUserData());
        clearTimeout(timerId);
        Notify('success', 'Login Successfully');
        setLoading(false);
      }, 1000);
    }
  };

  const handleClick = () => {
    editProfile();
  };

  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>
          <FontAwesomeIcon icon={faIdCard} className={cx('icon')} />
          edit your profile information
        </h2>
        <div className={cx('content')}>
          <div className={cx('line')}>
            <div className={cx('label')}>Firstname</div>
            <input
              className={cx('input')}
              value={firstName || ''}
              onChange={(e) => {
                setFirstName(e.currentTarget.value);
              }}
            />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>Lastname</div>
            <input
              className={cx('input')}
              value={lastName || ''}
              onChange={(e) => {
                setLastName(e.currentTarget.value);
              }}
            />
          </div>
          <div className={cx('line')}>
            <div className={cx('label')}>Date of Birth</div>
            <input
              type="date"
              className={cx('input-date')}
              value={new Date(dob).toLocaleDateString('en-CA') || '1990/01/01'}
              placeholder="dd-mm-yyyy"
              onChange={(e) => {
                setDob(e.currentTarget.value);
              }}
            />
          </div>
          {/* <div className={cx('line')}>
            <div className={cx('label')}>Address</div>
            <input className={cx('input')} value="HMC city, Viet Nam" />
          </div> */}
          <div className={cx('line')}>
            <div className={cx('label')}>Phone number</div>
            <input
              className={cx('input')}
              value={phoneNumber || ''}
              onChange={(e) => {
                setphoneNumber(e.currentTarget.value);
              }}
            />
          </div>
          <div className={cx('action')}>
            {loading ? (
              <div className={cx('loading')}>
                <span></span>
              </div>
            ) : (
              <button className={cx('confirm-button')} onClick={handleClick}>
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
      <ToastPortal ref={toastRef} autoClose={true} />
    </>
  );
}

//EditProfileTab.propTypes = {}

export default EditProfileTab;
