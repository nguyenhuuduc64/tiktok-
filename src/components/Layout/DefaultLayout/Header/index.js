import styles from './Header.module.scss';
import classNames from 'classnames';

function Header() {
  return (
    <header className={classNames(styles.wrapper)}>
      <div className={classNames(styles.inner)}>
        {/*logo */}

        {/*search */}
      </div>
    </header>
  );
}

export default Header;
