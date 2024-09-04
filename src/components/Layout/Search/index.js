import TippyHeadless from '@tippyjs/react/headless';
import AcountItems from '../DefaultLayout/AcountItems';
import axios from 'axios';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import instance from '../../../utils/http';
import * as searchServices from '../../../apiServices/searchServices';
import { useDebounce } from '../../../hooks';
import { Wrapper as PopperWrapper } from '../../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [blur, setBlur] = useState(false);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result.data);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);
    const showClearButton = !!searchValue && !loading;

    return (
        <TippyHeadless
            visible={searchValue.length > 0 && !blur}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Acounts</h4>
                        <>
                            {searchResult.map((result) => {
                                return <AcountItems key={result.id} data={result} />;
                            })}
                        </>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={classNames(styles.search)}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accouts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onBlur={() => setBlur(true)}
                    onFocus={() => setBlur(false)}
                />
                {/*khi có searchValue thì button clear mới được hiển thị */}
                {showClearButton && (
                    <button
                        className={classNames(styles.clear)}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                <button>
                    {loading && (
                        <FontAwesomeIcon className={classNames(styles.loading)} icon={faSpinner}></FontAwesomeIcon>
                    )}
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
    );
}

export default Search;
