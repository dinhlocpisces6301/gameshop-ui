import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
// import config from '~/config';

const cx = classNames.bind(styles);

function SearchResultItem({ data }) {
  return (
    <div className={cx('result')}>
      <Link to={`/product/${data.gameID}`} className={cx('game-wrapper')}>
        <img className={cx('game-img')} alt={data.name} src={process.env.PUBLIC_URL + '/images/img-not-found.jpg'} />
        <div className={cx('game-detail')}>
          <p>{data.name}</p>
          <p>{data.price * (1 - data.discount / 100)}</p>
        </div>
      </Link>
    </div>
  );
}

export default SearchResultItem;
