import clsx from 'clsx';
import styles from './AspectRatioSelect.module.css';

export default function AspectRatioSelect(props) {
  const { onChange = () => {}, aspectRatio } = props;

  const ratios = ['16:9', '1:1', '9:16'];

  return (
    <div className={styles.aspectRatioSelect}>
      {ratios.map((ratio) => (
        <button
          className={clsx(
            styles.button,
            ratio === aspectRatio && styles.active
          )}
          onClick={() => onChange(ratio)}
          key={ratio}
        >
          {ratio}
        </button>
      ))}
    </div>
  );
}
