import classNames from 'classnames/bind';
import Header from '~/components/Layout/SideBarLayout/Header';
import styles from './SideBarLayout.module.scss';

const cx = classNames.bind(styles);

function SideBarLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default SideBarLayout;
