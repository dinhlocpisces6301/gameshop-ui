import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import { navItems } from './NavItems.js';
import { useClickOutside } from '~/hooks';
import { getInfo, userSelector } from '~/store/reducers/userSlice';
import { logout } from '~/store/reducers/authSlice';
const cx = classNames.bind(styles);

function Header() {
  const currentUser = Boolean(localStorage.getItem('access_token'));
  const dispatch = useDispatch();
  const userInfo = useSelector(userSelector);

  const [storeDropdown, setStoreDropdown] = useState(false);
  const [communityDropdown, setCommunityDropdown] = useState(false);
  const [actionDropdown, setActionState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  const handleClick = () => {
    setActionState(!actionDropdown);
  };

  const ActionMenuRef = useRef();
  const handleHide = () => {
    setActionState(false);
  };
  useClickOutside(ActionMenuRef, handleHide);

  const renderNavItem = navItems.map((item) => {
    switch (item.title) {
      case 'Store':
        return (
          <li
            className={cx('navbar-item')}
            key={item.id}
            onMouseEnter={() => setStoreDropdown(true)}
            onMouseLeave={() => setStoreDropdown(false)}
          >
            <Link to={item.path}>{item.title}</Link>
            {storeDropdown && <Dropdown items={item.subnav} navbar />}
          </li>
        );
      case 'Community':
        return (
          <li
            className={cx('navbar-item')}
            key={item.id}
            onMouseEnter={() => setCommunityDropdown(true)}
            onMouseLeave={() => setCommunityDropdown(false)}
          >
            <Link to={item.path}>{item.title}</Link>
            {communityDropdown && <Dropdown items={item.subnav} navbar />}
          </li>
        );
      default:
        return (
          <li className={cx('navbar-item')} key={item.id}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
    }
  });

  const ActionMenuItems = [
    {
      id: 1,
      title: 'View Profile',
      path: `/profile/${userInfo.nickname}`,
    },
    {
      id: 2,
      title: 'Logout',
      path: '#',
      action: () => {
        dispatch(logout());
        const timerId = setTimeout(() => {
          clearTimeout(timerId);
          navigate(config.routes.login, { replace: true });
        }, 2000);
      },
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('header-logo')}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="Gaming store" />
          </Link>
        </div>
        {/* --- NavBar */}
        <ul className={cx('header-navbar')}>{renderNavItem}</ul>
        {/* --- Action Menu */}
        <div className={cx('action-menu-container')}>
          {currentUser ? (
            <>
              <div className={cx('action-menu')}>
                <Button wishlist to={config.routes.wishlist} className={cx('action-menu-button')}>
                  WISHLIST (0)
                </Button>
                <Button cart to={config.routes.cart} className={cx('action-menu-button')}>
                  CART (0)
                </Button>
              </div>
              <div className={cx('action-menu')} ref={ActionMenuRef}>
                <div className={cx('user-info')}>
                  <div className={cx('user-name')}>
                    <Link to="#" onClick={handleClick}>
                      {userInfo.nickname || '{name}'}
                      &nbsp;
                      <FontAwesomeIcon icon={faCaretDown} />
                    </Link>
                    {actionDropdown && <Dropdown items={ActionMenuItems} actionMenu />}
                  </div>
                  <Link to="" className={cx('avatar')}>
                    <img alt="avatar" src={process.env.PUBLIC_URL + `/Images/avatar.jpg`} />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={cx('action-menu')}>
                <Button primary to={config.routes.login} className={cx('action-menu-button')}>
                  Login
                </Button>
              </div>
              <div className={cx('action-menu')}>
                <Button text to={config.routes.signup} className={cx('action-menu-button')}>
                  Register
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
