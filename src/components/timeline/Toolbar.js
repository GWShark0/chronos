import { RiDeleteBin6Line as DeleteBinIcon } from 'react-icons/ri';
import styles from './Toolbar.module.css';

export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <button className={styles.button}>
        <DeleteBinIcon />
      </button>
    </div>
  );
}
