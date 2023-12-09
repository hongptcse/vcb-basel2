import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import TopHeader from './TopHeader';

const cx = classNames.bind(styles);

function Header() {
  var isAuthentication = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('header-top')}>
        <TopHeader />
      </div>
    </header>
  );
}

export default Header;
