//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';
import WishListItem from '../WishListItem';

import styles from './WishList.module.scss';

const cx = classNames.bind(styles);
function WishList() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Your WishList (5)</h2>
        <div className={cx('content')}>
          <div className={cx('wishlist-container')}>
            {true ? (
              <>
                <WishListItem />
                <WishListItem isAdded={true} />
                <WishListItem />
                <WishListItem isAdded={true} />
                <WishListItem />
              </>
            ) : (
              <div className={cx('empty-wishlist')}>
                <h2>Empty WishList</h2>
                <Button to={config.routes.home} className={cx('shopping-button')}>
                  Back to Store
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

//WishList.propTypes = {}

export default WishList;
