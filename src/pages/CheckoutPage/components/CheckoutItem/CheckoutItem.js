//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CheckoutItem.module.scss';

const cx = classNames.bind(styles);
function CheckoutItem() {
  return (
    <>
      <div className={cx('checkout-item')}>
        <Link to={'/product/id'} className={cx('img')}>
          <img src={process.env.PUBLIC_URL + '/images/GTAV.jpg'} alt="" />
        </Link>
        <div className={cx('item-detail')}>
          <div className={cx('item-name')}>
            <h2 className={cx('name')}>
              <Link to={'/product/id'}>Grand Theft Auto V</Link>
            </h2>
          </div>
          <div className={cx('item-price')}>
            <span className={cx('origin-price')}>200.000đ</span>
            <span className={cx('price')}>180.000đ</span>
          </div>
        </div>
      </div>
    </>
  );
}

//CheckoutItem.propTypes = {}

export default CheckoutItem;
