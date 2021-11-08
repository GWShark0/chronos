import { useDroppable } from '@dnd-kit/core';

export default function Droppable(props) {
  const { children, id, data } = props;
  const { setNodeRef } = useDroppable({ id, data });
  return <div ref={setNodeRef}>{children}</div>;
}
