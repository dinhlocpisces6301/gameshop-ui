import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import config from '~/config';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  const [copyRight, setCopyRight] = useState();
  useEffect(() => {
    const year = new Date().getFullYear();
    year === 2022 ? setCopyRight('Copyright © ' + year) : setCopyRight('Copyright © 2022 - ' + year);
  }, [copyRight]);

  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* Noi dung */}
        <div className={cx('footer-content')}>
          <ul>
            <li>
              <Link to={config.routes.home}>Home</Link>
            </li>
            <li>
              <Link to={config.routes.home}>Privacy Policy </Link>
            </li>
            <li>
              <Link to={config.routes.home}>Legal</Link>
            </li>
            <li>
              <Link to={config.routes.home}>Support</Link>
            </li>
          </ul>
        </div>
        <div className={cx('footer-content')}>
          <ul>
            <li>
              <p>Chúng tôi bán game lậu</p>
            </li>
            <li>
              <p>Chúng tôi bán game crack</p>
            </li>
            <li>
              <p>Chúng tôi crack game chứ không mua</p>
            </li>
          </ul>
        </div>
        <div className={cx('footer-content')}>
          <ul>
            <li>
              <p>Email: gamestore@gmail.com</p>
            </li>
            <li>
              <p>Phone/Fax: 18001050</p>
            </li>
            <li>
              <p>Social Media:</p>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} className={cx('icon')} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare} className={cx('icon')} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} className={cx('icon')} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('footer-coppyright')}>
        {/* Noi dung */}
        {copyRight} Game Store. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
