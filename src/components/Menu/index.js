import React, { useRef, useState, useEffect } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const refItems = useRef(null);
    const scrollbarRef = useRef(null);

    useEffect(() => {
        if (refItems.current) {
            console.log(refItems.current);
            scrollbarRef.current = new PerfectScrollbar(refItems.current);
        }
        return () => {
            if (scrollbarRef.current) {
                scrollbarRef.current.destroy();
            }
        };
    }, [current]);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            visible={true}
            hideOnClick={true}
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
                        <div className={cx('items-render')} ref={refItems}>
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
