import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
// import config from '~/config';

const cx = classNames.bind(styles);

function SearchResultItem({ data }) {
  return (
    <div className={cx('result')}>
      <Link to={`/product/id`} className={cx('game-wrapper')}>
        <img
          className={cx('game-img')}
          alt="Game"
          src="https://blogger.googleusercontent.com/img/a/AVvXsEjulwYcLJ4mUwek5aO-97cGJXkxYELs-EaILyt7QBDuH-mMyPHWa18VZmaIvSHvH9hUXfPv9wP3YMWnLZXn1fu7SVM4Hh7J6DGLlkoDFkZ05tHXs3xU4_wU0kdCxEPLAFCLA3HMengdDUpwDnf6D3O4iSEHY8Gexv0v89Nme45sHJ3u5ywXIMLudV9SMw=w0"
        />
        <div className={cx('game-detail')}>
          <p>Grand Theft Auto V</p>
          <p>227.000đ</p>
        </div>
      </Link>
    </div>
  );
}

export default SearchResultItem;
