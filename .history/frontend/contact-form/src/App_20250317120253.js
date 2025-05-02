import React from "react";
import "./App.css";
import About from "./components/About.js";
import Header from "./header.js";
import { Link as ScrollLink } from 'react-scroll';

// import ContactForm from "./components/ContactForm";

function App() {
  return ( 
    <div className="App">
  
           <Header />
    <About />

    </div>
  );
}

export default App;
