import React, { useContext } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./header";
import Main from "./home";
import { ThemeContext } from "./CreateTheme";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      <Header />
      <button 
        onClick={toggleTheme} 
        style={{
          display: "flex",
          padding: "10px",
          cursor: "pointer",
          fontSize: "20px",
          background: "none",
          border: "none"
        }}
      >
        {theme === "light" ? "🌙" : "🌞"}
      </button>
      <h1>Current Theme: {theme}</h1>
      <Main />
      <About />
    </div>
  );
}

export default App;
