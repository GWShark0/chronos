import { useDraggable } from '@dnd-kit/core';

export default function Draggable(props) {
  const Element = props.element || 'div';
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
    data: props.data,
  });
  return (
    <Element ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </Element>
  );
}
