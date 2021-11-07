import { memo } from 'react';
import squareBirb from 'assets/birbs/square-birb.jpg';
import tallBirb from 'assets/birbs/tall-birb.jpg';
import wideBirb from 'assets/birbs/wide-birb.jpg';
import useFlexRatio from 'hooks/useFlexRatio';
import Image from './Image';
import styles from './Preview.module.css';

const BIRB_MAP = {
  '16:9': wideBirb,
  '1:1': squareBirb,
  '9:16': tallBirb,
};

function Preview(props) {
  const { aspectRatio = '16:9' } = props;
  const { ref, width, height } = useFlexRatio(aspectRatio);

  return (
    <div className={styles.container}>
      <div className={styles.preview} ref={ref}>
        <Image
          width={width}
          height={height}
          src={BIRB_MAP[aspectRatio]}
          key={aspectRatio}
        />
      </div>
    </div>
  );
}

export default memo(Preview);
