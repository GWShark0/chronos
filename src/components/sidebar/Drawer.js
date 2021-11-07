import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveDrawerItem } from 'app/editorSlice';
import items from 'fixtures/stock.json';
import DraggableDrawerItem from './DraggableDrawerItem';
import styles from './Drawer.module.css';

function Drawer(props) {
  const { open = false } = props;
  const activeDrawerItem = useSelector(selectActiveDrawerItem);

  return (
    <div className={clsx(styles.drawer, open && styles.open)}>
      {items.map((item) => {
        const { id, thumbnail } = item;
        return (
          <DraggableDrawerItem
            id={id}
            thumbnail={thumbnail}
            placeholder={id === activeDrawerItem.id}
            key={id}
          />
        );
      })}
    </div>
  );
}

export default memo(Drawer);
