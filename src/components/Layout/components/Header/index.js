import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

const cx = classNames.bind(styles);

function Header() {
  var isAuthentication = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('header-top')}>
        <TopHeader />
      </div>
      <div className={cx('header-bottom')}>{isAuthentication && <BottomHeader />}</div>
    </header>
  );
}

export default Header;
