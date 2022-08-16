import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function SliderButton({ direction, moveSlide }) {
  return (
    <button onClick={moveSlide} className={direction === 'next' ? cx('btn-slide', 'next') : cx('btn-slide', 'prev')}>
      <img src={direction === 'next' ? images.rightArrow : images.leftArrow} alt="" />
    </button>
  );
}
