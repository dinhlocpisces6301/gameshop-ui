//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ToastPortal from '~/components/ToastPortal';
import Button from '~/components/Button';
import PaymentItem from '../CheckoutItem';
import config from '~/config';
import styles from './Payment.module.scss';
import * as productServices from '~/services/productServices';

const cx = classNames.bind(styles);
function Payment() {
  const toastRef = useRef();
  const navigate = useNavigate();
  const addToast = (mode, message) => {
    toastRef.current.addMessage({ mode: mode, message: message });
  };
  const handlePurchaseClick = async () => {
    await productServices.getProductList();
    addToast('success', 'Payment has been successfully!');
    const timerId = setTimeout(() => {
      clearTimeout(timerId);
      navigate(config.routes.home, { replace: true });
    }, 5000);
  };

  const handleCancelClick = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Checkout</h2>
        <div className={cx('content')}>
          <div className={cx('payment-container')}>
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
          </div>
          <div className={cx('payment-total-container')}>
            <div className={cx('total-price')}>Total price: 1.000.000đ</div>
            <div className={cx('discount')}>Total discount: -200.000đ</div>
            <div className={cx('vat')}>VAT: +70.000đ</div>
            <hr />
            <div className={cx('final-price')}>Amount: 870.000đ</div>
            <div className={cx('discount')}>Saved: 200.000đ</div>
            <div className={cx('action')}>
              <Button className={cx('cancel-button')} onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button className={cx('checkout-button')} onClick={handlePurchaseClick}>
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ToastPortal ref={toastRef} autoClose={true} />
    </>
  );
}

//Payment.propTypes = {}

export default Payment;
