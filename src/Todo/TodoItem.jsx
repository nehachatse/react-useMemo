import React, { useMemo } from "react";
const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};
function TodoItem({ id, title, status, onToggle }) {
  const time = useMemo(() => delay(200), []);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
      <div>{title}</div>
      <div>{status ? "DONE" : "NOT DONE"}</div>
      <button onClick={() => onToggle(id)}>TOGGLE </button>
      <div>{time}</div>
    </div>
  );
}
const areEqual = (prevProps, nextProps) => {
  if (prevProps.status === nextProps.status) {
    return true;
  }
  return false;
};
export const MemoisedTodoItem = React.memo(TodoItem, areEqual);

export default TodoItem;
