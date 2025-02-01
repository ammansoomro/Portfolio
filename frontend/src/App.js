import React from "react";

import { About, Footer, Header, Skills, Work } from "./container";
import "./App.scss";

const App = () => (
  <div className="app">
    <Header />
    <About />
    <Skills />
    <Work />
    <Footer />
  </div>
);

export default App;
