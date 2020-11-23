import React from "react";

export default function TodoItem({ todo, removeTodo }) {
  const titleStyle = {
    textDecoration: "line-through",
  };
  return (
    <div>
      <span style={todo.done ? titleStyle : null}>{todo.title}</span>
      {/* todo.done이 true이면 titleStyle 적용 */}
      <button onClick={() => removeTodo(todo.id)}>제거</button>
    </div>
  );
}
