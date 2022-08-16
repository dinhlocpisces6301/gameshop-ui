// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import SliderButton from './SliderButton';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideValue, setSlideValue] = useState([]);

  useEffect(() => {
    const dataSlider = [
      {
        id: 1,
        name: 'Grand Theft Auto I',
        category: ['Open World I', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 2,
        name: 'Grand Theft Auto II',
        category: ['Open World II', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 3,
        name: 'Grand Theft Auto III',
        category: ['Open World III', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 4,
        name: 'Grand Theft Auto IIII',
        category: ['Open World IV', 'Multiplayer', 'Action'],
        price: '227.000đ',
      },
      {
        id: 5,
        name: 'Grand Theft Auto V',
        category: ['Open World V', 'Multiplayer', 'Action', 'Fighter'],
        price: '227.000đ',
      },
    ];

    setSlideValue(dataSlider);
  }, []);

  useEffect(() => {
    const timerId = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(timerId);
    };
  });

  const nextSlide = () => {
    if (slideIndex !== slideValue.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideValue.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slideValue.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={cx('container-slider')}>
      {slideValue.map((item, index) => {
        return (
          <div className={slideIndex === index + 1 ? cx('slide', 'active-anim') : cx('slide')} key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} alt="" />
            </Link>
            <div className={cx('detail-wrapper')}>
              <Link to={`/product/${item.id}`} className={cx('detail-link')}>
                <div className={cx('detail-content')}>
                  <div className={cx('title')}>{item.name}</div>
                  <div className={cx('category-items')}>
                    {item.category.map((category, index) => {
                      return (
                        <div key={index} className={cx('category-item')} href="/">
                          {category}
                        </div>
                      );
                    })}
                  </div>
                  <div className={cx('discount-prices')}>
                    <div className={cx('discount-orginal-price')}>500.000đ</div>
                    <div className={cx('discount-final-price')}>{item.price}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
      <SliderButton moveSlide={nextSlide} direction={'next'} />
      <SliderButton moveSlide={prevSlide} direction={'prev'} />

      <div className={cx('container-dots')}>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? cx('dot', 'active') : cx('dot')}
          ></div>
        ))}
      </div>
    </div>
  );
}
