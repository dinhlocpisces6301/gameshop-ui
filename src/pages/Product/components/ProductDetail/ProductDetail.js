import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductGallery from '../ProductGallery';
import { cartSelector, getCart } from '~/store/reducers/cartSlice';
import * as cartServices from '~/services/cartServices';
import ToastPortal from '~/components/ToastPortal';
import { useNotification } from '~/hooks';

import config from '~/config';

import styles from './ProductDetail.module.scss';
const cx = classNames.bind(styles);

function ProductDetail({ data }) {
  const [value, setValue] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toastRef = useRef();
  const Notify = useNotification(toastRef);
  useEffect(() => {
    setValue(data);
  }, [data]);

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
      setLoading(false);
    }
  };
  const handleClick = () => {
    addToCart();
  };

  const cart = useSelector(cartSelector);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    setCartData(cart.data);
  }, [cart]);
  return (
    <>
      <div className={cx('wrapper')}>
        {value !== undefined ? (
          <>
            <div className={cx('container')}>
              <div className={cx('gallery')}>
                <ProductGallery />
              </div>
              <div className={cx('product-information')}>
                <div className={cx('information-wrapper')}>
                  <img
                    alt="product img"
                    src={process.env.PUBLIC_URL + '/images/img-not-found.jpg'}
                    className={cx('product-img')}
                  />
                  <h2 className={cx('product-name')}>{value.name}</h2>
                  <div className={cx('product-description')}>{value.description}</div>
                  <div className={cx('product-release-date')}>
                    <div className={cx('title')}>RELEASE DATE:</div>
                    <div className={cx('date')}>{new Date(value.createdDate).toLocaleDateString(undefined)}</div>
                  </div>
                  <div className={cx('product-development')}>
                    <div className={cx('title')}>DEVELOPER:</div>
                    <Link to="#" className={cx('link')}>
                      Rockstar North
                    </Link>
                  </div>
                  <div className={cx('product-publisher')}>
                    <div className={cx('title')}>PUBLISHER:</div>
                    <Link to="#" className={cx('link')}>
                      Rockstar Games
                    </Link>
                  </div>
                  <div className={cx('product-category')}>
                    <div className={cx('title')}>CATEGORY:</div>
                    <div className={cx('category-wrapper')}>
                      {value.genreName !== undefined &&
                        value.genreName.map((item, index) => {
                          const id = value.genreIDs[index];
                          return (
                            <Link to={`/category/${id}`} className={cx('category-item')} key={id}>
                              {item}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('action-container')}>
              <div className={cx('wishlist-section')}>
                <button className={cx('wishlish-button')}>Add to your WishList</button>
              </div>
              <div className={cx('cart-section')}>
                {value.discount !== 0 && <span className={cx('origin-price')}>{value.price}</span>}
                <span className={cx('discount-price')}>{(value.price * (1 - value.discount / 100)).toString()}</span>
                {cartData.find((element) => element.gameId === value.gameID) === undefined ? (
                  loading ? (
                    <div className={cx('loading')}>
                      <span></span>
                    </div>
                  ) : (
                    <button className={cx('loading')} onClick={handleClick}>
                      Add to Cart
                    </button>
                  )
                ) : (
                  <Link to={config.routes.cart} className={cx('view-cart-button')}>
                    View Cart
                  </Link>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={cx('not-found')}>
              <span>404 not found</span>
            </div>
          </>
        )}
      </div>
      <ToastPortal ref={toastRef} autoClose={true} />
    </>
  );
}

export default ProductDetail;
