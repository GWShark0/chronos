import styles from './TrackItem.module.css';

export default function TrackItem(props) {
  const { offset, thumbnail, width } = props;

  const style = {
    left: offset,
    width,
  };

  const thumbsStyle = {
    backgroundImage: `url(${thumbnail})`,
  };

  return (
    <div className={styles.trackItem} style={style}>
      <div className={styles.thumbs} style={thumbsStyle} />
    </div>
  );
}
