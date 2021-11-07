import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import styles from './Indicator.module.css';

const INDICATOR_HEIGHT = 64;

export default function Indicator(props) {
  const { index = -1 } = props;
  const active = index >= 0;
  const [visible, setVisible] = useState(false);

  const offset = index * INDICATOR_HEIGHT;
  const style = {
    transform: `translateY(${offset}px)`,
    transitionProperty: visible ? 'transform' : 'none',
  };

  const handleAnimationEnd = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (!active) {
      setVisible(false);
    }
  }, [active]);

  return (
    <div
      className={clsx(styles.indicator, active && styles.active)}
      style={style}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}
