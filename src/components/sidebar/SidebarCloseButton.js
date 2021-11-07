import { RiArrowLeftSLine as ArrowLeft } from 'react-icons/ri';
import { ReactComponent as TabShape } from 'assets/tab.svg';
import styles from './SidebarCloseButton.module.css';

export default function SidebarCloseButton(props) {
  const { onClick } = props;
  return (
    <button className={styles.sidebarClose} onClick={onClick}>
      <TabShape />
      <ArrowLeft className={styles.arrow} />
    </button>
  );
}
