import clsx from 'clsx';
import { memo } from 'react';
import items from 'fixtures/stock.json';
import DrawerItem from './DrawerItem';
import styles from './Drawer.module.css';

function Drawer(props) {
  const { open = false } = props;

  return (
    <div className={clsx(styles.drawer, open && styles.open)}>
      {items.map((item) => {
        const { id, thumbnail } = item;
        return <DrawerItem id={id} thumbnail={thumbnail} key={id} />;
      })}
    </div>
  );
}

export default memo(Drawer);
