//import PropTypes from 'prop-types';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './InfoTab.module.scss';

const cx = classNames.bind(styles);
function InfoTab() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>
          <FontAwesomeIcon icon={faUser} className={cx('icon')} />
          about me
        </h2>
        <div className={cx('container')}>
          <div className={cx('content')}>
            <h2 className={cx('title')}>Personal Infomation</h2>
            <>
              <div className={cx('line')}>
                <div className={cx('label')}>Username:</div>
                <div className={cx('text')}>dinhlocpisces</div>
              </div>
              <div className={cx('line')}>
                <div className={cx('label')}>Fullname:</div>
                <div className={cx('text')}>Bui Dinh Loc</div>
              </div>
              <div className={cx('line')}>
                <div className={cx('label')}>Nickname:</div>
                <div className={cx('text')}>To Diep</div>
              </div>
              <div className={cx('line')}>
                <div className={cx('label')}>Date of Birth:</div>
                <div className={cx('text')}>06/03/2001</div>
              </div>
              <div className={cx('line')}>
                <div className={cx('label')}>Address:</div>
                <div className={cx('text')}>HMC city, Viet Nam</div>
              </div>
            </>
            <h2 className={cx('title')}>Contact Infomation</h2>
            <>
              <div className={cx('line')}>
                <div className={cx('label')}>Phone:</div>
                <div className={cx('text')}>0969819201</div>
              </div>
              <div className={cx('line')}>
                <div className={cx('label')}>Mail:</div>
                <div className={cx('text')}>dinhloc334@gmail.com</div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

//InfoTab.propTypes = {}

export default InfoTab;
