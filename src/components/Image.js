import clsx from 'clsx';
import { useState } from 'react';

import styles from './Image.module.css';

export default function Image(props) {
  const { width = 0, height = 0, src } = props;
  const style = { width, height };
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      className={clsx(styles.image, loaded && styles.loaded)}
      style={style}
      src={src}
      onLoad={handleLoad}
      alt=""
    />
  );
}
