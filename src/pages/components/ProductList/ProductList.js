// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';

import ProductItem from './ProductItem';
import ProductReview from './ProductReview';
import * as productServices from '~/services/productServices';
import { useNavigate, useParams } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductList({ data, pagination = false }) {
  const { genre, page } = useParams();
  const navigate = useNavigate();
  console.log(genre, page);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewValue, setReviewValue] = useState({
    id: 0,
    name: '',
    category: [],
    price: '',
  });
  const [value, setValue] = useState([]);
  const [title, setTitle] = useState('Title');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.getProductList();
      setReviewValue(result.data[0]);
      setValue(result.data);
      setTitle(result.title);
      setIsLoaded(true);
    };

    fetchApi();
  }, []);

  var _page = parseInt(page);
  const handleClickPrev = () => {
    if (page === undefined || page === 'undefined' || _page === 1) {
      return;
    } else {
      navigate(`/category/${genre}&_page=${_page - 1}`);
      // console.log(`/category/${genre}&_page=${page * 1.0 - 1}`);
    }
  };
  const handleClickNext = () => {
    if (page === undefined || page === 'undefined') {
      _page = 1;
    } else if (_page >= 10) {
      return;
    }
    const _nextPage = _page + 1;
    navigate(`/category/${genre}&_page=${_nextPage.toString()}`);
    // console.log(`/category/${genre}&_page=${page * 1.0 + 1}`);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2>{title}</h2>
      </div>
      <div className={cx('container')}>
        <div className={cx('content')}>
          {value.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setReviewIndex(index);
                  setReviewValue(value[index]);
                }}
              >
                <ProductItem data={item} isActive={index === reviewIndex} />
              </div>
            );
          })}
        </div>
        <div className={cx('review')}>{isLoaded && <ProductReview data={reviewValue} />}</div>
      </div>
      <div className={cx('footer')}>
        {pagination && (
          <>
            <button className={cx('prev-button')} onClick={handleClickPrev} disabled={_page === 1}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button className={cx('next-button')} onClick={handleClickNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ProductList.propTypes = {};

export default ProductList;
