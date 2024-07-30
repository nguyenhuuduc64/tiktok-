import Header from './Header';
import Sidebar from './Sitdebar';
import styles from './defaultLayout.module.scss';
import classNames from 'classnames';
function DefaultLayout({ children }) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Header />
      <div className={classNames(styles.container)}>
        <Sidebar />
        <div className={classNames(styles.content)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
