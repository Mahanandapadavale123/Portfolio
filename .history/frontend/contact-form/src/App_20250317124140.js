import React from "react";
import "./App.css";
import About from "./components/About.js";
import Header from "./header.js";
 import Main from "./home.js";

// import ContactForm from "./components/ContactForm";

function App() {
  return ( 
    <div className="App">
    <Main />
     <Header />
    <About />

    </div>
  );
}

export default App;
