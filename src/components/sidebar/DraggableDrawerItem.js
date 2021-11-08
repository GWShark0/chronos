import Draggable from 'components/Draggable';
import DrawerItem from './DrawerItem';

export default function DraggableDrawerItem(props) {
  const { id, thumbnail } = props;
  return (
    <Draggable
      id={`drawer-item-${id}`}
      data={{ id, type: 'drawer-item', thumbnail }}
    >
      <DrawerItem {...props} />
    </Draggable>
  );
}
