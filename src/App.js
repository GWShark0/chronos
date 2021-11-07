import Sidebar from './components/Sidebar';
import Stage from './components/Stage';
import Timeline from './components/Timeline';

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
