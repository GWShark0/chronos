import { useState } from 'react';
import AspectRatioSelect from './AspectRatioSelect';
import MediaControls from './MediaControls';
import Preview from './Preview';
import styles from './Stage.module.css';

export default function Stage() {
  const [aspectRatio, setAspectRatio] = useState('16:9');

  return (
    <div className={styles.stage}>
      <AspectRatioSelect aspectRatio={aspectRatio} onChange={setAspectRatio} />
      <Preview aspectRatio={aspectRatio} />
      <MediaControls />
    </div>
  );
}
