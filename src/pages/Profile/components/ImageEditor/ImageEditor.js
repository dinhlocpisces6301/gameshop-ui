//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { forwardRef, useImperativeHandle, useState } from 'react';

import styles from './ImageEditor.module.scss';

const cx = classNames.bind(styles);
const ImageEditor = forwardRef(({ ImagePath, typeImage }, ref) => {
  useImperativeHandle(ref, () => {});
  const [loaded, setLoaded] = useState('false');
  return loaded ? (
    <>
      <div className={cx('wrapper')}>
        <button onClick={() => setLoaded(false)}>Off</button>
      </div>
    </>
  ) : (
    <></>
  );
});

//ImageEditor.propTypes = {}

export default ImageEditor;
