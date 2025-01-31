import React from "react";

import { Footer, Header, Skills, Testimonial, Work } from "./container";
import "./App.scss";

const App = () => (
  <div className="app">
    <Header />
    {/* <About /> */}
    <Skills />
    <Work />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
