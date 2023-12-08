import styles from './BottomHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SUB_HEADER_ITEMS = [
  {
    href: '/',
    title: 'Trang chủ',
  },
  {
    href: '/upload',
    title: 'Upload',
  },
  {
    href: '/download',
    title: 'Tải báo cáo',
  },
  {
    href: '/logout',
    title: 'Đăng xuất',
  },
];

function BottomHeader() {
  var isAuthentication = true;

  return (
    <div className={cx('subheader-wrapper')}>
      <ul className={cx('subheader-ul')}>
        {SUB_HEADER_ITEMS.map((item, index) => {
          return (
            <li className={cx('subheader-li')} key={index}>
              <a className={cx('subheader-li-a')} href={item.href}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BottomHeader;
