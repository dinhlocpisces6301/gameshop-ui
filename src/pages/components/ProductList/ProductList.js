// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';

import ProductItem from './ProductItem';
import ProductReview from './ProductReview';
import * as productServices from '~/services/productServices';
const cx = classNames.bind(styles);

function ProductList() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewValue, setReviewValue] = useState({
    id: 0,
    name: '',
    category: [],
    price: '',
  });
  const [value, setValue] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.getProductList();

      setReviewValue(result[0]);
      setValue(result);
      setIsLoaded(true);
    };

    fetchApi();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <p>Best Seller</p>
      </div>
      <div className={cx('container')}>
        <div className={cx('content')}>
          {value.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setReviewIndex(index);
                  setReviewValue(value[index]);
                }}
              >
                <ProductItem data={item} isActive={index === reviewIndex} />
              </div>
            );
          })}
        </div>
        <div className={cx('review')}>{isLoaded && <ProductReview data={reviewValue} />}</div>
      </div>
      <div className={cx('footer')}></div>
    </div>
  );
}

// ProductList.propTypes = {};

export default ProductList;
