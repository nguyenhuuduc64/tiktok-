import AcountItems from '../Layout/DefaultLayout/AcountItems';
import { Wrapper as PopperWrapper } from '../Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            <h4>{item.title}</h4>;
                            setHistory((pre) => [...pre, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            delay={[0, 500]}
            offset={[10, 10]}
            placement="bottom-end"
            trigger="mouseenter"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory(history.slice(0, history.length - 1));
                                }}
                            />
                        )}

                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
