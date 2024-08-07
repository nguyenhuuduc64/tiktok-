import styles from './button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary,
  onClick,
  disable,
  rounded,
  className,
  outline,
  large,
  text,
  children,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  }
  if (href) {
    props.href = href;
    Comp = 'a';
  }
  if (disable) {
    delete props.onClick;
  }
  const classes = cx('wrapper', { primary, outline, rounded, large, text, disable, [className]: className });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
