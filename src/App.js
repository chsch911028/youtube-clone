import React from "react";
import NavBar from "./components/Nav/NavBar";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <SideBar />
      <Main />
    </div>
  );
};

export default App;
