import { DndContext } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { endDrawerItemDrag, startDrawerItemDrag } from 'app/editorSlice';
import DragOverlay from 'components/DragOverlay';
import Sidebar from 'components/sidebar/Sidebar';
import Stage from 'components/stage/Stage';
import Timeline from 'components/timeline/Timeline';
import styles from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  const handleDragStart = (event) => {
    const item = event.active.data.current;

    if (item.type === 'drawer-item') {
      dispatch(startDrawerItemDrag(item));
    }
  };

  const handleDragEnd = (event) => {
    dispatch(endDrawerItemDrag());

    if (!event.over) {
      return;
    }
  };

  return (
    <div className={styles.app}>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
