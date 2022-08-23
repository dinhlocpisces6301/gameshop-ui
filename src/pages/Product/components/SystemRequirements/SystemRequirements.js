import classNames from 'classnames/bind';

import styles from './SystemRequirements.module.scss';

const cx = classNames.bind(styles);
function SystemRequirements() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2 className={cx('header-title')}>System Requirements</h2>
        <div className={cx('container')}>
          <div className={cx('minimum-requirement')}>
            <ul>
              <li>
                <h2 className={cx('title')}>Minimum:</h2>
              </li>
              <li>{`Requires a 64-bit processor and operating system`}</li>
              <li>
                <strong>OS:</strong>{' '}
                {`Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service
                Pack 1`}
              </li>
              <li>
                <strong>Processor:</strong>{' '}
                {`Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core
                Processor (4 CPUs) @ 2.5GHz`}
              </li>
              <li>
                <strong>Memory:</strong> {`4 GB RAM`}
              </li>
              <li>
                <strong>Graphics:</strong> {`NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)`}
              </li>
              <li>
                <strong>Storage:</strong> {`72 GB available space`}
              </li>
              <li>
                <strong>Sound Card:</strong> {`100% DirectX 10 compatible`}
              </li>
            </ul>
          </div>
          <div className={cx('recommended-requirement')}>
            <ul>
              <li>
                <h2 className={cx('title')}>Recommended:</h2>
              </li>
              <li>{`Requires a 64-bit processor and operating system`}</li>
              <li>
                <strong>OS:</strong>{' '}
                {`Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service
                Pack 1`}
              </li>
              <li>
                <strong>Processor:</strong> {` Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)`}
              </li>
              <li>
                <strong>Memory:</strong> {`8 GB RAM`}
              </li>
              <li>
                <strong>Graphics:</strong> {`NVIDIA GTX 660 2GB / AMD HD 7870 2GB`}
              </li>
              <li>
                <strong>Storage:</strong> {`72 GB available space`}
              </li>
              <li>
                <strong>Sound Card:</strong> {`100% DirectX 10 compatible`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SystemRequirements;
