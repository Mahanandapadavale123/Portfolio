import { createContext, useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./header";
import Main from "./home";
import { ThemeContext } from "./CreateTheme";
import ContactForm from "./components/ContactForm";


function App() {
  export const ThemeContext = createContext();
  
  export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);
  
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
