import { DndContext } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { endDrawerItemDrag, startDrawerItemDrag } from 'app/editorSlice';
import { addItem } from 'app/projectSlice';
import DragOverlay from 'components/DragOverlay';
import Sidebar from 'components/sidebar/Sidebar';
import Stage from 'components/stage/Stage';
import Timeline from 'components/timeline/Timeline';
import styles from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  const handleDragStart = (event) => {
    // console.log(event);
    const item = event.active.data.current;

    if (item.type === 'drawer-item') {
      dispatch(startDrawerItemDrag(item));
    }
  };

  const handleDragMove = (event) => {
    // console.log(event);
  };

  const handleDragEnd = (event) => {
    dispatch(endDrawerItemDrag());

    if (!event.over) {
      return;
    }

    const active = event.active;
    const over = event.over;

    // console.log(active);
    // console.log(over);

    const activeData = active.data.current;
    const overData = over.data.current;

    if (activeData.type === 'drawer-item' && overData.type === 'track') {
      dispatch(
        addItem({ trackId: overData.id, thumbnail: activeData.thumbnail })
      );
    }
  };

  return (
    <div className={styles.app}>
      <DndContext
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      >
        <div className={styles.grid}>
          <Sidebar />
          <Stage />
          <Timeline />
        </div>
        <DragOverlay />
      </DndContext>
    </div>
  );
}
