import React from "react";

export default function ListItem({ user }) {
  return (
    <div>
      <h2>{user.username}</h2>
      <span>{user.email}</span>
    </div>
  );
}
