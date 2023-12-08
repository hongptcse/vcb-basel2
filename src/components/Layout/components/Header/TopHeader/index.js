import styles from './TopHeader.module.scss';
import classNames from 'classnames/bind';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function TopHeader() {
  return (
    <div className={cx('container')}>
      {/* <img src={images.logo} alt="Vietcombank" /> */}
      <img className={cx('banner')} src={images.banner1} alt="Vietcombank - Basel II - Banner" />
    </div>
  );
}

export default TopHeader;
