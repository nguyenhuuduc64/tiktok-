import classNames from 'classnames/bind';
import styles from './AcountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AcountItems({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} alt="" src={data.avatar} />
            <div className={cx('infor')}>
                <div className={cx('name')}>
                    <p>{data.full_name}</p>
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('check-item')}></FontAwesomeIcon>}
                </div>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </div>
    );
}

export default AcountItems;
