import Draggable from 'components/Draggable';
import DrawerItem from './DrawerItem';

export default function DraggableDrawerItem(props) {
  return (
    <Draggable
      id={`drawer-item-${props.id}`}
      data={{ type: 'drawer-item', ...props }}
    >
      <DrawerItem {...props} />
    </Draggable>
  );
}
