import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import ContactForm from "./ContactForm";

function App() {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Main />
      <About />
      <ContactForm />
    </ThemeContext.Provider>
  );
}

export default App;
