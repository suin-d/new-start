import React, { useState } from "react";

export default function TodoCreator({ addTodo }) {
  const [title, settitle] = useState(""); // 문자열 자리, 빈문자열 기본값
  const onChange = (e) => {
    settitle(e.target.value);
  };
  return (
    <div>
      <input type="text" value={title} onChange={onChange} />
      <button
        onClick={() => {
          addTodo(title);
          settitle("");
        }}
      >
        추가
      </button>
      {/* ()=>{
        addTodo(title);
      }; 과 같은 의미 */}
    </div>
  );
}
