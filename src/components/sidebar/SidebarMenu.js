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
import SidebarMenuItem from './SidebarMenuItem';
import styles from './SidebarMenu.module.css';

export default function SidebarMenu(props) {
  const { activeId, onChange = () => {} } = props;

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
    <nav className={styles.nav}>
      <Indicator index={index} />
      {items.map((item) => {
        return (
          <SidebarMenuItem
            {...item}
            active={item.id === activeId}
            onClick={onChange}
            key={item.id}
          />
        );
      })}
    </nav>
  );
}
