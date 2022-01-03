import React from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem, { MemoisedTodoItem } from "./TodoItem";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [data, setData] = useState(() => {
    return new Array(10).fill(0).map((_, i) => ({
      id: i,
      title: `${i}th element`,
      status: false
    }));
  });
  const handleAdd = (title) => {
    setData([...data, { id: uuid(), title: title, status: false }]);
  };

  const handleToggle = React.useCallback(
    (id) => {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setData(updatedData, []);
    },
    [data]
  );
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      {data.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
