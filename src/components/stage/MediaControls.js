import {
  RiPlayFill as PlayIcon,
  RiSkipBackMiniFill as SkipBackIcon,
  RiSkipForwardMiniFill as SkipForwardIcon,
} from 'react-icons/ri';
import styles from './MediaControls.module.css';

export default function MediaControls() {
  return (
    <div className={styles.mediaControls}>
      <SkipBackIcon />
      <PlayIcon />
      <SkipForwardIcon />
    </div>
  );
}
