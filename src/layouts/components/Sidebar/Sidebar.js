import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('container')}>
        <span>DISCOVERY QUEUES</span>
        <Link to={config.routes.home}>Recommendations</Link>
        <Link to={config.routes.home}>New Releases</Link>
      </div>
      <div className={cx('container')}>
        <span>BROWSE CATEGORIES</span>
        <Link to={config.routes.home}>Top Sellers</Link>
        <Link to={config.routes.home}>New Releases</Link>
        <Link to={config.routes.home}>Upcoming</Link>
        <Link to={config.routes.home}>Upcoming</Link>
        <Link to={config.routes.home}>Specials</Link>
      </div>
      <div className={cx('container')}>
        <span>BROWSE BY GENRE</span>
        <Link to={config.routes.home}>Free to play</Link>
        <Link to={config.routes.home}>Easy access</Link>
        <Link to={config.routes.home}>Action</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
