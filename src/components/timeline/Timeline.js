import { useSelector } from 'react-redux';
import { selectTracks } from 'app/projectSlice';
import Toolbar from './Toolbar';
import Track from './Track';
import styles from './Timeline.module.css';

export default function Timeline() {
  const tracks = useSelector(selectTracks);

  return (
    <div className={styles.timeline}>
      <Toolbar />
      <div className={styles.scrollContainer}>
        {tracks.map((track) => {
          return <Track id={track.id} items={track.items} key={track.id} />;
        })}
      </div>
    </div>
  );
}
