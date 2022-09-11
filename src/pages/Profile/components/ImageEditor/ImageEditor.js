//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ImageEditor.module.scss';

const cx = classNames.bind(styles);
function ImageEditor() {
  return (
    <>
      <div className={cx('wrapper')}></div>
    </>
  );
}

//ImageEditor.propTypes = {}

export default ImageEditor;
