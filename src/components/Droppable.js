import { useDroppable } from '@dnd-kit/core';

export default function Droppable(props) {
  const { children, id } = props;
  const { setNodeRef } = useDroppable({ id });
  return <div ref={setNodeRef}>{children}</div>;
}
