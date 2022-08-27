//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ShoppingCart.module.scss';
import CartItem from '../CartItem';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);
function ShoppingCart() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Your Shopping Cart</h2>
        <div className={cx('content')}>
          <div className={cx('cart-container')}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            {/* <div className={cx('empty-cart')}>
              <h2>Empty Cart</h2>
              <Button to={config.routes.home} className={cx('shopping-button')}>
                Back to Store
              </Button>
            </div> */}
          </div>
          <div className={cx('cart-total-container')}>
            <div className={cx('total-price')}>Total: 0đ</div>
            <div className={cx('discount')}>Discount: 0đ</div>
            <hr />
            <div className={cx('final-price')}>Estimated total: 0đ</div>
            <div className={cx('action')}>
              <Button to={config.routes.home} className={cx('shopping-button')}>
                Continue Shopping
              </Button>
              <Button to={config.routes.checkout} className={cx('checkout-button')}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//ShoppingCart.propTypes = {}

export default ShoppingCart;
