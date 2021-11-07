import styles from './Timeline.module.css';

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.scrollContainer}>
        <div className={styles.track}></div>
        <div className={styles.track}></div>
        <div className={styles.track}></div>
        <div className={styles.track}></div>
      </div>
    </div>
  );
}
