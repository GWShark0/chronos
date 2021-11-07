import clsx from 'clsx';
import { useState } from 'react';
import {
  RiFilmLine as FilmIcon,
  RiFolder3Line as FolderIcon,
  RiImageLine as ImageIcon,
  RiMusic2Line as MusicIcon,
  RiPaletteLine as PaletteIcon,
  RiShapeLine as ShapeIcon,
  RiText as TextIcon,
  RiUploadCloud2Line as UploadCloudIcon,
} from 'react-icons/ri';
import Indicator from './Indicator';
import SidebarCloseButton from './SidebarCloseButton';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [activeId, setActiveId] = useState('media');
  const [open, setOpen] = useState(true);

  const handleButtonClick = (event, id) => {
    setActiveId(id);
    setOpen(true);
  };

  const handleCloseButtonClick = (event) => {
    setActiveId();
    setOpen(false);
  };

  const items = [
    {
      id: 'upload',
      icon: UploadCloudIcon,
      label: 'Upload',
    },
    {
      id: 'media',
      icon: FolderIcon,
      label: 'Media',
    },
    {
      id: 'videos',
      icon: FilmIcon,
      label: 'Videos',
    },
    {
      id: 'images',
      icon: ImageIcon,
      label: 'Images',
    },
    {
      id: 'audio',
      icon: MusicIcon,
      label: 'Audio',
    },
    {
      id: 'text',
      icon: TextIcon,
      label: 'Text',
    },
    {
      id: 'graphics',
      icon: ShapeIcon,
      label: 'Graphics',
    },
    {
      id: 'styles',
      icon: PaletteIcon,
      label: 'Styles',
    },
  ];

  const index = items.findIndex((item) => item.id === activeId);

  return (
    <div className={clsx(styles.sidebar, open && styles.open)}>
      <div className={styles.drawer}>
        {open && <SidebarCloseButton onClick={handleCloseButtonClick} />}
        <div className={styles.drawerContent}></div>
      </div>
      <nav className={styles.nav}>
        <Indicator index={index} />
        {items.map((item) => {
          const { id, icon: Icon, label } = item;
          const active = id === activeId;
          return (
            <button
              className={clsx(styles.button, active && styles.active)}
              onClick={(event) => handleButtonClick(event, id)}
              key={id}
            >
              <Icon />
              <div className={styles.label}>{label}</div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
