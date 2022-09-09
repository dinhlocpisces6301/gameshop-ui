import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import { navItems } from './NavItems.js';
import { useClickOutside } from '~/hooks';
import { getUserData, userSelector } from '~/store/reducers/userSlice';
import { getCart, cartSelector } from '~/store/reducers/cartSlice';
import { getWishlist, wishlistSelector } from '~/store/reducers/wishlistSlice';
import * as authServices from '~/services/authServices';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();
  const [storeDropdown, setStoreDropdown] = useState(false);
  const [communityDropdown, setCommunityDropdown] = useState(false);
  const [actionDropdown, setActionState] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
    dispatch(getCart());
    dispatch(getWishlist());
  }, [dispatch]);

  const userInfo = useSelector(userSelector);
  const [userName, setUserName] = useState(undefined);
  useLayoutEffect(() => {
    if (userInfo.data !== undefined) {
      setUserName(userInfo.data.userName);
    }
  }, [userInfo]);

  const cart = useSelector(cartSelector);
  const [cartData, setCartData] = useState([]);
  useLayoutEffect(() => {
    setCartData(cart.data || []);
  }, [cart]);

  const wishlist = useSelector(wishlistSelector);
  const [wishlistData, setWishlistData] = useState([]);
  useLayoutEffect(() => {
    setWishlistData(wishlist.data || []);
  }, [wishlist]);

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
      path: `/profile/${userName}`,
    },
    {
      id: 2,
      title: 'Logout',
      path: '#',
      action: () => {
        const timerId = setTimeout(() => {
          clearTimeout(timerId);
          authServices.logout();
          navigate(config.routes.login, { replace: true });
        }, 2000);
      },
    },
  ];

  const isLoggedIn = authServices.isLoggedIn();
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
          {isLoggedIn ? (
            <>
              <div className={cx('action-menu')}>
                <Button wishlist to={config.routes.wishlist} className={cx('action-menu-button')}>
                  {`WISHLIST (${wishlistData.length})`}
                </Button>
                <Button cart to={config.routes.cart} className={cx('action-menu-button')}>
                  {`CART (${cartData.length})`}
                </Button>
              </div>
              <div className={cx('action-menu')} ref={ActionMenuRef}>
                <div className={cx('user-info')}>
                  <div className={cx('user-name')}>
                    <Link to="#" onClick={handleClick}>
                      {userName || '{name}'}
                      &nbsp;
                      <FontAwesomeIcon icon={faCaretDown} />
                    </Link>
                    {actionDropdown && <Dropdown items={ActionMenuItems} actionMenu />}
                  </div>
                  <Link to="" className={cx('avatar')}>
                    <img alt="avatar" src={process.env.PUBLIC_URL + `/Images/avatar-placeholder.jpg`} />
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
