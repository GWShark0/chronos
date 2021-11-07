import clsx from 'clsx';
import { memo } from 'react';
import styles from './SidebarMenuItem.module.css';

function SidebarMenuItem(props) {
  const {
    active = false,
    icon: Icon = <span />,
    id,
    label = '',
    onClick = () => {},
  } = props;

  const handleClick = (event) => {
    onClick(event, id);
  };

  return (
    <button
      className={clsx(styles.menuItem, active && styles.active)}
      onClick={handleClick}
    >
      <Icon />
      <div className={styles.label}>{label}</div>
    </button>
  );
}

export default memo(SidebarMenuItem);
