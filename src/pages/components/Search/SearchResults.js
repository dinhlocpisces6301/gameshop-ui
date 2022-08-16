import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import config from '~/config';
import SearchResultItem from './SearchResultItem';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function SearchResults({ items }) {
  return (
    <div className={cx('search-results')}>
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <p>Results: 10 Game(s) has found</p>
        </div>
        <div className={cx('container')}>
          <SearchResultItem data={items} />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </div>
        <div className={cx('footer')}>
          <Link to={config.routes.home}>See more</Link>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
