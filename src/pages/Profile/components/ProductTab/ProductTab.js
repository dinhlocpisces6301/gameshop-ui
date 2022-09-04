//import PropTypes from 'prop-types';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import ProductItems from './components/ProductItems';

import styles from './ProductTab.module.scss';

const cx = classNames.bind(styles);
function ProductTab() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>
          <FontAwesomeIcon icon={faGamepad} className={cx('icon')} />
          products you've purchased (5)
        </h2>
        <div className={cx('container')}>
          <ProductItems />
        </div>
      </div>
    </>
  );
}

//ProductTab.propTypes = {}

export default ProductTab;
