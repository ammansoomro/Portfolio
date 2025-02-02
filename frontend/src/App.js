import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { About, Footer, Header, Skills, Work, Experience } from "./container";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.scss";

const App = () => (
  <div className="app">
    <ThemeProvider>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Footer />
    </ThemeProvider>
  </div>
);

export default App;
