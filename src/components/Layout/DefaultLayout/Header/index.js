import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import Tippy from '@tippyjs/react/headless';
import Button from '../../../Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useEffect, useState } from 'react';
import AcountItems from '../AcountItems';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  });
  return (
    <header className={classNames(styles.wrapper)}>
      <div className={classNames(styles.inner)}>
        {/*logo */}
        <img src={images.logo.default} alt="avt"></img>
        <Tippy
          interactive
          visible={searchResult.length > 0}
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
        </Tippy>
        {/*search */}
        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button primary className={cx('')}>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
