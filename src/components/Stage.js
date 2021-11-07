import { useState } from 'react';
import MediaControls from './MediaControls';
import Preview from './Preview';

import styles from './Stage.module.css';

export default function Stage() {
  const [aspectRatio, setAspectRatio] = useState('16:9');
  return (
    <div className={styles.stage}>
      <div>
        <button onClick={() => setAspectRatio('16:9')}>16:9</button>
        <button onClick={() => setAspectRatio('1:1')}>1:1</button>
        <button onClick={() => setAspectRatio('9:16')}>9:16</button>
      </div>
      <Preview aspectRatio={aspectRatio} />
      <MediaControls />
    </div>
  );
}
