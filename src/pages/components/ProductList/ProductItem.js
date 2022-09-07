import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

import styles from './ProductList.module.scss';
// import config from '~/config';

const cx = classNames.bind(styles);

function ProductItem({ data, isActive }) {
  return (
    <>
      <div className={cx('product-item')}>
        <Link to={`/product/${data.gameID}`} className={isActive ? cx('item-wrapper', 'active') : cx('item-wrapper')}>
          <img className={cx('item-img')} alt="Game" src={process.env.PUBLIC_URL + '/images/img-not-found.jpg'} />
          <div className={cx('item-detail')}>
            <div className={cx('item-content')}>
              <div className={cx('item-title')}>{data.name}</div>
              <div className={cx('item-category')}>{data.genreName.join(', ')}</div>
            </div>
            <div className={cx('discount-prices')}>
              <div className={cx('discount-orginal-price')}>{data.price}</div>
              <div className={cx('discount-final-price')}>{data.price * (1 - data.discount / 100)}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

ProductItem.prototype = {
  isActive: PropTypes.bool,
  data: PropTypes.object,
};
export default ProductItem;
