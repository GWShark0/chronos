import clsx from 'clsx';
import { useCallback, useState } from 'react';
import Drawer from './Drawer';
import SidebarCloseButton from './SidebarCloseButton';
import SidebarMenu from './SidebarMenu';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [activeId, setActiveId] = useState('media');
  const [open, setOpen] = useState(true);

  const handleSidebarChange = useCallback((event, id) => {
    setActiveId(id);
    setOpen(true);
  }, []);

  const handleCloseButtonClick = useCallback((event) => {
    setActiveId();
    setOpen(false);
  }, []);

  return (
    <div className={clsx(styles.sidebar, open && styles.open)}>
      {open && <SidebarCloseButton onClick={handleCloseButtonClick} />}
      <div className={styles.drawerContainer}>
        <Drawer open={open} />
      </div>
      <SidebarMenu activeId={activeId} onChange={handleSidebarChange} />
    </div>
  );
}
