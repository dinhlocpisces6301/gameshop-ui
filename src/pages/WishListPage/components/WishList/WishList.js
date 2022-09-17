//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '~/config';
import Button from '~/components/Button';
import WishListItem from '../WishListItem';
import { getWishlist, wishlistSelector } from '~/store/reducers/wishlistSlice';
import styles from './WishList.module.scss';
const cx = classNames.bind(styles);
function WishList() {
  const dispatch = useDispatch();
  const wishlist = useSelector(wishlistSelector);
  const [wishlistData, setWishlistData] = useState([]);
  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  useEffect(() => {
    setWishlistData(wishlist.data || []);
  }, [wishlist]);
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Your WishList ({wishlistData.length})</h2>
        <div className={cx('content')}>
          <div className={cx('wishlist-container')}>
            {wishlistData.length > 0 ? (
              wishlistData.map((item, index) => {
                return <WishListItem key={item.gameID} data={item} />;
              })
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
