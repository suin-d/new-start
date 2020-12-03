import React from "react";
import { Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Counter from "./components/Counter";
import MovieApp from "./components/MovieApp";
import "./scss/index.scss";
import Nav from "./components/Nav";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      {/* exact 정확히 주소가 일치할때만 렌더링, 하지 않을 경우 Home 페이지가 중복 출력 */}
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
      <Route path="/movie" component={MovieApp} />
      <Route path="/movie" component={Detail} />
    </>
  );
}

export default App;
