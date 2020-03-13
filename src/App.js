import React from "react";
import "./styles.scss";

import Header from "./header/Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main className="position-relative" cards={7} />
      <Footer className="position-relative" />
    </div>
  );
}
