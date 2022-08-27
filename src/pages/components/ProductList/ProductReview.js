import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);
function ProductReview({ data }) {
  return (
    <div className={cx('review-container')}>
      <div className={cx('review-title')}>{data.name}</div>
      <div className={cx('category-items')}>
        {data.category.map((category, index) => {
          return (
            <Link to={`/category/${category}`} key={index} className={cx('category-item')}>
              {category}
            </Link>
          );
        })}
      </div>
      <div className={cx('review-gallery')}>
        <img className={cx('review-img')} alt="Game" src={data.img} />
        <img className={cx('review-img')} alt="Game" src={data.img} />
        <img className={cx('review-img')} alt="Game" src={data.img} />
        <img className={cx('review-img')} alt="Game" src={data.img} />
      </div>
    </div>
  );
}
ProductReview.prototype = {
  data: PropTypes.object,
};
export default ProductReview;
