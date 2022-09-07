import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductGallery from '../ProductGallery';

import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail({ data }) {
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    setValue(data);
  }, [data]);
  console.log(value);

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
                <span className={cx('origin-price')}>{value.price}</span>
                <span className={cx('discount-price')}>{(value.price * (1 - value.discount / 100)).toString()}</span>
                <button className={cx('cart-button')}>Add to Cart</button>
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
    </>
  );
}

export default ProductDetail;
