import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Explore from './components/explore/Explore'

function App() {
  return (
    <div className="app">
      <Header />
      <Explore />
      {/* FOOTER */}
    </div>
  );
}

export default App;
