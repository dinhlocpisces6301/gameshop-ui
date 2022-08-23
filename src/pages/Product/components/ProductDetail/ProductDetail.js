import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ProductGallery from '../ProductGallery';

import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('gallery')}>
            <ProductGallery />
          </div>
          <div className={cx('product-information')}>
            <div className={cx('information-wrapper')}>
              <img alt="product img" src={process.env.PUBLIC_URL + '/images/GTAV.jpg'} className={cx('product-img')} />
              <div className={cx('product-description')}>
                Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and
                Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game
                running at 60 frames per second.
              </div>
              <div className={cx('product-release-date')}>
                <div className={cx('title')}>RELEASE DATE:</div>
                <div className={cx('date')}>14 Apr, 2015</div>
              </div>
              <div className={cx('product-development')}>
                <div className={cx('title')}>DEVELOPER:</div>
                <Link to="/" className={cx('link')}>
                  Rockstar North
                </Link>
              </div>
              <div className={cx('product-publisher')}>
                <div className={cx('title')}>PUBLISHER:</div>
                <Link to="/" className={cx('link')}>
                  Rockstar Games
                </Link>
              </div>
              <div className={cx('product-category')}>
                <div className={cx('title')}>CATEGORY:</div>
                <div className={cx('category-wrapper')}>
                  <Link to={`/category/1`} className={cx('category-item')}>
                    Open World
                  </Link>
                  <Link to={`/category/2`} className={cx('category-item')}>
                    Multiplayer
                  </Link>
                  <Link to={`/category/3`} className={cx('category-item')}>
                    Action
                  </Link>
                  <Link to={`/category/4`} className={cx('category-item')}>
                    Fighter
                  </Link>
                  <Link to={`/category/5`} className={cx('category-item')}>
                    Sexaully
                  </Link>
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
            <span className={cx('origin-price')}>200.000đ</span>
            <span className={cx('discount-price')}>200.000đ</span>
            <button className={cx('cart-button')}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
