import React from "react";
import "./App.css";
import About from "./components/About.js";
import Header from "./header.js";
 import Main from "./home.js";


// import ContactForm from "./components/ContactForm";

import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default function Root() {
  return (
    
  );
}


function App() {
  return ( 
    <div className="App">
     <Header />
     <ThemeProvider>
      <App />
    </ThemeProvider>
      <Main />
    <About />

    </div>
  );
}

export default App;
