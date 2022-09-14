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
import config from '~/config';
const cx = classNames.bind(styles);

function ProductList({ pagination = false, typePage = '', title = 'List Product' }) {
  const navigate = useNavigate();

  const { genre, keyword, page } = useParams();
  // console.log({ _genre: genre, _keyword: keyword, _page: page });
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewValue, setReviewValue] = useState({});
  const [value, setValue] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(1000);

  useEffect(() => {
    const fetchApi = async () => {
      var result;
      switch (typePage) {
        case 'search': {
          result = await productServices.getProductsByKeyword(keyword, page || 1);
          break;
        }
        case 'category': {
          result = await productServices.getProductsByGenreId(genre, page || 1);
          break;
        }
        case 'products': {
          if (keyword === 'latest') {
            result = await productServices.getAllProduct(page || 1);
          } else {
            result = await productServices.getAllProduct(page || 1);
          }
          break;
        }
        default: {
          return;
        }
      }
      setReviewValue(result.items[0]);
      setValue(result.items);
      setIsLoaded(true);
      setTotalPages(result.pageCount);
    };

    fetchApi();
  }, [genre, keyword, page, typePage]);

  var _page = parseInt(page || 1);
  const handleClickPrev = () => {
    if (page === undefined || page === 'undefined') {
      return;
    } else {
      const query = genre || `q=${keyword || 'all'}`;
      navigate(`/${typePage}/${query}/page=${_page - 1}`);
    }
  };

  const handleClickNext = () => {
    if (page === undefined || page === 'undefined') {
      _page = 1;
    }
    const _nextPage = _page + 1;
    const query = genre || `q=${keyword || 'all'}`;
    navigate(`/${typePage}/${query}/page=${_nextPage.toString()}`);
  };

  useEffect(() => {
    if (_page < 1 || _page > totalPages) {
      navigate(config.routes.notFound, { replace: true });
    }
    console.log(totalPages);
  }, [_page, navigate, totalPages]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h2>{title}</h2>
      </div>
      <div className={cx('container')}>
        {value.length > 0 ? (
          <>
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
          </>
        ) : (
          <div className={cx('not-found')}>
            <span>no result(s) found</span>
          </div>
        )}
      </div>
      <div className={cx('footer')}>
        {totalPages > 1 && pagination && (
          <>
            <button className={cx('prev-button')} onClick={handleClickPrev} disabled={_page <= 1}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button className={cx('next-button')} onClick={handleClickNext} disabled={_page === totalPages}>
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
