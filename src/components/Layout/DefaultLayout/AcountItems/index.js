import classNames from 'classnames/bind';
import styles from './AcountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AcountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        alt=""
        src="https://cdnmedia.tinmoi.vn/resize_1280x853/upload/trantrang/2023/04/14/rose8-1681463988-161957avatar.jpg"
      />
      <div className={cx('infor')}>
        <div className={cx('name')}>
          <p>Nguyen Van A</p>
          <FontAwesomeIcon icon={faCircleCheck} className={cx('check-item')}></FontAwesomeIcon>
        </div>
        <span className={cx('user-name')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AcountItems;
