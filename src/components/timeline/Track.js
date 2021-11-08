import Droppable from 'components/Droppable';
import TrackItem from './TrackItem';
import styles from './Track.module.css';

export default function Track(props) {
  const { id, items = [] } = props;
  return (
    <Droppable id={id} data={{ id, type: 'track' }}>
      <div className={styles.track}>
        {items.map((item) => {
          return (
            <TrackItem
              offset={item.offset}
              thumbnail={item.thumbnail}
              width={item.width}
              key={item.id}
            />
          );
        })}
      </div>
    </Droppable>
  );
}
