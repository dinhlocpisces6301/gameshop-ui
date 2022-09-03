//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import Button from '~/components/Button';

import styles from './ContactForm.module.scss';

const cx = classNames.bind(styles);
function ContactForm() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Contact Us</h2>
        <div className={cx('container')}>
          <div className={cx('label')}>Title</div>
          <input className={cx('input')} placeholder="Title" ref={inputRef} />
          <div className={cx('label')}>Your Email</div>
          <input className={cx('input')} placeholder="Email" />
          <div className={cx('label')}>Content</div>
          <textarea rows={10} className={cx('content-input')} placeholder="Content" />
          <Button
            className={cx('submit-button')}
            onClick={() => {
              console.log('sent');
            }}
          >
            Sent
          </Button>
        </div>
      </div>
    </>
  );
}

//ContactForm.propTypes = {}

export default ContactForm;
