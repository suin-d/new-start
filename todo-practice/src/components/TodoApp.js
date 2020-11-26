import React, { useState, useEffect } from "react";
import cryptoRandomString from "crypto-random-string";
import axios from "axios";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

const initialTodos = [
  //{id:1, title:'아침먹기', completed:false}
];

// let id = 0;
export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [loading, setLoading] = useState(false);
  // 로딩중일 때
  const [success, setSuccess] = useState(null);
  // 성공했을 때 데이터를 success안에 담아줌
  const [error, setError] = useState(null);
  // 에러에 걸리면 에러 상태를 true로

  const fetchTodos = async () => {
    // axios.get이 주소로 get 요청 보내서 반환되는 값을 담음
    // await 써주기 위해선 함수를 무조건 비동기 함수로 만들어야 => async
    // await async는 결과가 반환이 될때까지 기다렸다가 그때야 response에 값을 담아줌
    // async await가 없으면 일반 함수, 요청이 아직 안왔는데 값을 담아버리기 때문에 <pending> undefined 뜸!

    try {
      setError(null);
      setSuccess(null);
      // 요청이 두번보내질 수도 있기 때문에 null값으로 초기화 후 시작
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setSuccess(response.data);
      setTodos(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
    // 성공 시 다시 false로
  };

  useEffect(() => {
    // console.log("투두앱이 그려졌습니다!", todos);
    // 컴포넌트가 마운트 됐을 때 실행할 내용
    // return () => {
    //   console.log("투두앱이 지워졌습니다.");
    // };
    fetchTodos();
  }, []);
  // useEffect(() => {
  //   effect // mount 됐을 때 실행할 동작, or []안에 수정이 일어났을 때 여기서 정의
  //   return () => {
  //     cleanup // unmount될 때 실행
  //   }
  // }, [input])
  const addTodo = (title) => {
    const newTodo = {
      //   id: id++,
      // crypto-random-string 사용!
      id: cryptoRandomString({ length: 10 }),
      title,
      completed: false,
    };
    //  console.log(newTodo);
    // setTodos([...todos, newTodo]);
    // 가지고 있던 객체 복사 후, 새로 만들어진 것 추가
    setTodos(todos.concat(newTodo));
    // concat 메소드가 todos 배열 안에 newTodo 추가
    // push는 todos 자체에다 값을 넣는데, concat은 배열 자체를 새로 만들어서 넣어준다. (불변성)
  };
  // console.log(todos);

  const onToggle = (id) => {
    // const newTodos = todos.map((todo) =>
    //   todo.id === id ? { ...todo, completed: !todo.completed } : todo
    // );
    // setTodos(newTodos);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    // map이 안에 있는 로직 처리 후 배열을 새로 만들어서 return
    // 같을 경우 todo를 수정한 객체, todo를 한번 복사해와서 completed값만 바꿔줌(이미 todo안에 들어온 상태)
  };

  const removeTodo = (id) => {
    //  console.log(id);
    // const newTodo = todos.filter((todo) => todo.id !== id);
    // filter 메소드 사용 시, 배열의 객체를 받아 조건을 넣어줄 수 있음
    // 배열 자체에 적용을 시키지 않고 값을 return 시키기 때문에 새로운 무언가에 담아줘야! (결과물을 담을 그릇이 필요)
    // setTodos(newTodo);
    // 새로 반환된 결과물 설정
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;
  if (!success) return null;
  return (
    <div>
      {/* <TodoItem /> */}
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          onToggle={onToggle}
        />
      ))}
      <TodoCreator addTodo={addTodo} />
    </div>
  );
}
