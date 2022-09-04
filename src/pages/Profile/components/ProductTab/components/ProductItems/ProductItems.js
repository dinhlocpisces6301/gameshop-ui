//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ProductItem from '../ProductItem/ProductItem';

import styles from './ProductItems.module.scss';

const cx = classNames.bind(styles);
function ProductItems() {
  return (
    <>
      <div className={cx('container')}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </>
  );
}

//ProductItems.propTypes = {}

export default ProductItems;
