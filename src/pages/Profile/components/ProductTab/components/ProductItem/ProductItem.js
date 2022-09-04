//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('detail')}>
          <h2 className={cx('name')}>
            <Link to={`/product/1`}>Grand Theft Auto V</Link>
          </h2>
          <div className={cx('date')}>
            Release date: <strong>14/04/2015</strong>
          </div>
          <div className={cx('date')}>
            Bought at: <strong>04/09/2022</strong>
          </div>
          <div className={cx('money')}>
            Paid: <strong>200.000đ</strong>
          </div>
        </div>
        <div className={cx('img')}>
          <img src={process.env.PUBLIC_URL + '/images/GTAV.jpg'} alt="Game" />
        </div>
      </div>
    </>
  );
}

//ProductItem.propTypes = {}

export default ProductItem;
