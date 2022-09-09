import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import config from '~/config';
import styles from './WishListItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getCart, cartSelector } from '~/store/reducers/cartSlice';
import { getWishlist } from '~/store/reducers/wishlistSlice';
import * as wishlistServices from '~/services/wishlistServices';
import * as cartServices from '~/services/cartServices';
import { useNotification } from '~/hooks';
import ToastPortal from '~/components/ToastPortal';

const cx = classNames.bind(styles);
function WishListItem({ isAdded = false, data }) {
  const toastRef = useRef();
  const Notify = useNotification(toastRef);

  const cart = useSelector(cartSelector);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    setCartData(cart.data || []);
  }, [cart]);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const removeItem = async () => {
    setLoading(true);
    const response = await wishlistServices.removeWishlist({ gameID: data.gameID });
    console.log(response);
    if (response.isSuccess === true) {
      Notify('success', 'Removed Successfully');
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        dispatch(getWishlist());
      }, 2000);
    }
    if (response.isSuccess === false) {
      Notify('error', 'Removed Fail');
      setLoading(false);
    }
  };

  const addToCart = async () => {
    setLoading(true);
    const response = await cartServices.addToCart({ gameID: data.gameID });
    console.log(response);
    if (response.isSuccess === true) {
      Notify('success', 'Removed Successfully');
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        dispatch(getCart());
      }, 3000);
    }
    if (response.isSuccess === false) {
      Notify('error', 'Add to cart Fail');
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        setLoading(false);
      }, 3000);
    }
  };

  const handleAddToCart = () => {
    addToCart();
  };
  const handleClick = () => {
    removeItem();
  };

  return (
    <>
      <div className={cx('cart-item')}>
        <Link to={`/product/${data.gameID}`} className={cx('img')}>
          <img src={process.env.PUBLIC_URL + '/images/img-not-found.jpg'} alt="" />
        </Link>
        <div className={cx('item-detail')}>
          <div className={cx('item-information')}>
            <h2 className={cx('name')}>
              <Link to={`/product/${data.gameID}`}>{data.name}</Link>
            </h2>
            <div className={cx('item-rating')}>OVERALL REVIEWS: VERY POSITIVE</div>
            <div className={cx('item-release-date')}>RELEASE DATE:</div>
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
            <span className={cx('price')}>{data.price * (1 - data.discount / 100)}</span>
          </div>
          <div className={cx('action')}>
            {cartData.find((element) => element.gameId === data.gameID) === undefined ? (
              loading ? (
                <div className={cx('loading')}>
                  <span></span>
                </div>
              ) : (
                <Button className={cx('cart-button')} onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              )
            ) : (
              <Button to={config.routes.cart} className={cx('view-cart-button')}>
                View in Cart
              </Button>
            )}
            <div className={cx('addon')}>
              Added on {new Date(new Date().getTime()).toLocaleDateString(undefined)} ({' '}
              <span className={cx('remove')} onClick={handleClick}>
                Remove
              </span>{' '}
              )
            </div>
          </div>
        </div>
      </div>
      <ToastPortal ref={toastRef} autoClose={true} />
    </>
  );
}

WishListItem.propTypes = { isAdded: PropTypes.bool };

export default WishListItem;
