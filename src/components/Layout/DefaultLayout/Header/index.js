import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../../Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faPersonHiking,
    faSignOut,
    faSpinner,
    faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useEffect, useState } from 'react';
import AcountItems from '../AcountItems';
import Menu from '../../../Menu';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENUS = [
    {
        icon: <FontAwesomeIcon icon={faPersonHiking}></FontAwesomeIcon>,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Set coins',
        to: '/setcoin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
        title: 'Log out',
        href: './',
        setparate: true,
    },
];

function Header() {
    const current_user = true;
    return (
        <header className={classNames(styles.wrapper)}>
            <div className={classNames(styles.inner)}>
                {/*logo */}
                <img src={images.logo.default} alt="avt"></img>
                <TippyHeadless
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Acounts</h4>
                                <AcountItems />
                                <AcountItems />
                                <AcountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={classNames(styles.search)}>
                        <input placeholder="Search accouts and videos" spellCheck={false} />
                        <button className={classNames(styles.clear)}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <button>
                            <FontAwesomeIcon className={classNames(styles.loading)} icon={faSpinner}></FontAwesomeIcon>
                        </button>
                        <span
                            style={{
                                width: '1px',
                                height: '22px',
                                backgroundColor: '#999',
                            }}
                        ></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </TippyHeadless>

                <div className={cx('action')}>
                    {current_user ? (
                        <>
                            <Tippy content="Upload videos" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary className={cx('')}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={current_user ? USER_MENUS : MENU_ITEMS}>
                        {current_user ? (
                            <img
                                className={cx('user-avt')}
                                alt=""
                                src="https://t.vietgiaitri.com/2021/8/2/bi-mat-dang-sau-avatar-den-si-cua-rose-blackpink-tren-tiktok-khien-nguoi-ham-mo-ngo-ngang-ngo-ngac-va-bat-ngua-166-5935003.jpeg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
