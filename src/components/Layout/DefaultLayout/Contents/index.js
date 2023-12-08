import classNames from 'classnames/bind';
import styles from './Contents.module.scss';

const cx = classNames.bind(styles);

function Content() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Content</h2>
    </aside>
  );
}

export default Content;
