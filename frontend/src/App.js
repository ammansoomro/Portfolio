import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <ThemeProvider>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Footer />
    </ThemeProvider>
  </div>
);

export default App;
