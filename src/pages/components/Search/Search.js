import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import SearchResults from './SearchResults';
import { useClickOutside } from '~/hooks';
import config from '~/config';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    setSearchResult([1]);
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleShow = () => {
    setShowResult(true);
  };

  const handleHideResult = (e) => {
    setShowResult(false);
  };

  useClickOutside(searchRef, handleHideResult);

  return (
    <div className={cx('search')} ref={searchRef}>
      <div className={cx('search-box')}>
        <div className={cx('spacing')}></div>
        <input
          className={cx('search-input')}
          type="text"
          placeholder="Search . . ."
          value={searchValue}
          onChange={handleSearch}
          onFocus={handleShow}
        />
        <Link type="button" className={cx('search-button')} to={config.routes.search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
      {showResult && searchResult.length > 0 && <SearchResults items={searchResult} />}
    </div>
  );
}

export default Search;
