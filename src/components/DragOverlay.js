import { DragOverlay } from '@dnd-kit/core';
import { useSelector } from 'react-redux';
import { selectActiveDrawerItem } from 'app/editorSlice';
import DrawerItem from 'components/sidebar/DrawerItem';

export default function DragOverlayContainer() {
  const activeDrawerItem = useSelector(selectActiveDrawerItem);

  return (
    <DragOverlay>
      {activeDrawerItem.id && <DrawerItem {...activeDrawerItem} dragging />}
    </DragOverlay>
  );
}
