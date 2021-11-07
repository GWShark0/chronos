import { useState } from 'react';
import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
import styles from './AspectRatioSelect.module.css';

import { RiSettings5Fill as SettingsIcon } from 'react-icons/ri';
import clsx from 'clsx';

export default function AspectRatioSelect(props) {
  const { onChange = () => {}, aspectRatio } = props;

  const ratios = ['16:9', '1:1', '9:16'];

  const handleClick = (ratio) => {
    onChange(ratio);
  };

  return (
    <div className={styles.aspectRatioSelect}>
      {ratios.map((ratio) => (
        <button
          className={clsx(
            styles.button,
            ratio === aspectRatio && styles.active
          )}
          onClick={() => handleClick(ratio)}
          key={ratio}
        >
          {ratio}
        </button>
      ))}
    </div>
  );
}
