// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';

import ProductItem from './ProductItem';
import ProductReview from './ProductReview';

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

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'Grand Theft Auto I',
        category: ['Open World I', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 2,
        name: 'Grand Theft Auto II',
        category: ['Open World II', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 3,
        name: 'Grand Theft Auto III',
        category: ['Open World III', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 4,
        name: 'Grand Theft Auto IIII',
        category: ['Open World IV', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 5,
        name: 'Grand Theft Auto V',
        category: ['Open World V', 'Multiplayer', 'Action', 'Fighter'],
        price: '227.000đ',
      },
      {
        id: 6,
        name: 'Grand Theft Auto VI',
        category: ['Open World VI', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 7,
        name: 'Grand Theft Auto VII',
        category: ['Open World VII', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 8,
        name: 'Grand Theft Auto VIII',
        category: ['Open World VIII', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 9,
        name: 'Grand Theft Auto IX',
        category: ['Open World IX', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 10,
        name: 'Grand Theft Auto X',
        category: ['Open World X', 'Multiplayer', 'Action', 'Fighter'],
        price: '227.000đ',
      },
    ];

    setReviewValue(products[0]);
    setValue(products);
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
        <div className={cx('review')}>
          <ProductReview data={reviewValue} />
        </div>
      </div>
      <div className={cx('footer')}></div>
    </div>
  );
}

// ProductList.propTypes = {};

export default ProductList;
