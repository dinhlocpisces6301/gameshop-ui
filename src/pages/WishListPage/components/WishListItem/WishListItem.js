import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import config from '~/config';
import styles from './WishListItem.module.scss';

const cx = classNames.bind(styles);
function WishListItem({ isAdded = false, data }) {
  return (
    <>
      <div className={cx('cart-item')}>
        <Link to={'/product/id'} className={cx('img')}>
          <img src={process.env.PUBLIC_URL + '/images/GTAV.jpg'} alt="" />
        </Link>
        <div className={cx('item-detail')}>
          <div className={cx('item-information')}>
            <h2 className={cx('name')}>
              <Link to={'/product/id'}>Grand Theft Auto V</Link>
            </h2>
            <div className={cx('item-rating')}>OVERALL REVIEWS: VERY POSITIVE</div>
            <div className={cx('item-release-date')}>RELEASE DATE: 14 APR, 2015</div>
            <div className={cx('category-items')}>
              <Link to={'/category/1'} className={cx('category-item')}>
                Action
              </Link>
              <Link to={'/category/2'} className={cx('category-item')}>
                Open World
              </Link>
              <Link to={'/category/3'} className={cx('category-item')}>
                Fight
              </Link>
            </div>
          </div>
          <div className={cx('item-price')}>
            <span className={cx('price')}>180.000đ</span>
          </div>
          <div className={cx('action')}>
            {isAdded ? (
              <Button to={config.routes.cart} className={cx('view-cart-button')}>
                View in Cart
              </Button>
            ) : (
              <Button className={cx('cart-button')}>Add to Cart</Button>
            )}
            <div className={cx('addon')}>
              Added on 27/08/2022 ( <span className={cx('remove')}>Remove</span> )
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

WishListItem.propTypes = { isAdded: PropTypes.bool };

export default WishListItem;
