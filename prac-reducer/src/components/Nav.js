import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav__box">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about" activeStyle={{ textDecoration: "underline" }}>
        ABOUT
      </NavLink>
      <NavLink to="/counter" activeStyle={{ textDecoration: "underline" }}>
        COUNTER
      </NavLink>
      <NavLink to="/movie" activeStyle={{ textDecoration: "underline" }}>
        MOVIE
      </NavLink>
      <NavLink to="/movie/suin" activeStyle={{ textDecoration: "underline" }}>
        DETAIL
      </NavLink>
    </nav>
  );
}
