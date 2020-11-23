import React, { useState } from "react";
import cryptoRandomString from "crypto-random-string";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

const initialTodos = [
  //{id:1, title:'아침먹기', done:false}
];

// let id = 0;
export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (title) => {
    const newTodo = {
      //   id: id++,
      // crypto-random-string 사용!
      id: cryptoRandomString({ length: 10 }),
      title,
      done: false,
    };
    //  console.log(newTodo);
    // setTodos([...todos, newTodo]);
    // 가지고 있던 객체 복사 후, 새로 만들어진 것 추가
    setTodos(todos.concat(newTodo));
    // concat 메소드가 todos 배열 안에 newTodo 추가
    // push는 todos 자체에다 값을 넣는데, concat은 배열 자체를 새로 만들어서 넣어준다. (불변성)
  };
  // console.log(todos);
  const removeTodo = (id) => {
    //  console.log(id);
    // const newTodo = todos.filter((todo) => todo.id !== id);
    // filter 메소드 사용 시, 배열의 객체를 받아 조건을 넣어줄 수 있음
    // 배열 자체에 적용을 시키지 않고 값을 return 시키기 때문에 새로운 무언가에 담아줘야! (결과물을 담을 그릇이 필요)
    // setTodos(newTodo);
    // 새로 반환된 결과물 설정
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* <TodoItem /> */}
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} />
      ))}
      <TodoCreator addTodo={addTodo} />
    </div>
  );
}
