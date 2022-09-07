import classNames from 'classnames/bind';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

import styles from './ProductGallery.module.scss';

const cx = classNames.bind(styles);
const valueApi = [
  process.env.PUBLIC_URL + '/images/img-not-found.jpg',
  process.env.PUBLIC_URL + '/images/img-not-found.jpg',
  process.env.PUBLIC_URL + '/images/img-not-found.jpg',
  process.env.PUBLIC_URL + '/images/img-not-found.jpg',
];

function ProductGallery({ data = valueApi }) {
  const [imgIndex, setImgIndex] = useState(0);
  //   gắn giá trị khởi tạo là bức hình đầu tiên
  const [screenPath, setscreenPath] = useState(valueApi[0]);
  useLayoutEffect(() => {
    const timerId = setInterval(nextSlide, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const nextSlide = () => {
    if (imgIndex !== valueApi.length - 1) {
      setImgIndex(imgIndex + 1);
      setscreenPath(valueApi[imgIndex + 1]);
    } else if (imgIndex === valueApi.length - 1) {
      setImgIndex(0);
      setscreenPath(valueApi[0]);
    }
  };
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('screen')}>
          <img src={screenPath} alt="" className={cx('screen-img')} />
        </div>
        <div className={cx('gallery-items')}>
          {valueApi.map((image, index) => {
            return (
              <div className={cx('gallery-item')} key={index}>
                <img
                  src={image}
                  alt=""
                  className={imgIndex === index ? cx('gallery-item', 'focus') : cx('gallery-item')}
                  onClick={() => {
                    setImgIndex(index);
                    setscreenPath(image);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductGallery;
