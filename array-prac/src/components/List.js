import React from "react";
import ListItem from "./ListItem";

const users = [
  { id: 1, username: "수인", email: "suins@gmail.com" },
  { id: 2, username: "수인2", email: "suin2@gmail.com" },
  { id: 3, username: "수인3", email: "suin3@gmail.com" },
  { id: 4, username: "수인4", email: "suin4@gmail.com" },
  { id: 5, username: "수인5", email: "suin5@gmail.com" },
];

// users.forEach((user) => {
//   console.log(user);
// });

// const newUser = users.map((user, index) => ({
//   ...user,
//   username: "가다나" + index,
// }));

const newUser = users.map((user, index) => ({
  ...user,
  username: `가다나${index}`,
}));

console.log(newUser);
// 값을 리턴시켜 다시 담을 수 있음! (forEach는 실행만)
// 원본 값은 그대로 내버려두기 때문에 새로운 배열 만들 때 사용
export default function List() {
  return (
    <div>
      <h1>리스트목록</h1>
      {/* {users.map((user) => (
        <ListItem user={user} />
      ))} */}
      {users.map((item) => (
        <ListItem user={item} key={item.id} />
      ))}
      {/* map이 index를 한번씩 돌면서 반환, users 배열을 한번씩 돌면서 ListItem 반환, 
    그 배열 안에 있는 객체들을 user라는 이름으로 받아서 넘겨주는 것 */}

      {/* <ListItem user={users[0]} />
      <ListItem user={users[1]} />
      <ListItem user={users[2]} />
      <ListItem user={users[3]} />
      <ListItem user={users[4]} /> */}
    </div>
  );
}
