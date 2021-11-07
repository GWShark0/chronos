import Sidebar from 'components/sidebar/Sidebar';
import Stage from 'components/stage/Stage';
import Timeline from 'components/timeline/Timeline';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.grid}>
        <Sidebar />
        <Stage />
        <Timeline />
      </div>
    </div>
  );
}
