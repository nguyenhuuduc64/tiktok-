import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Menu.module.scss';
function MenuItems({ data, onClick }) {
    const cx = classNames.bind(styles);
    return (
        <div>
            <Button className={cx('menu-item', 'left', { setparate: data.setparate })} onClick={onClick} to={data.to}>
                {data.icon}
                <span>{data.title}</span>
            </Button>
        </div>
    );
}

export default MenuItems;
