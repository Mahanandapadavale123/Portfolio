import "./App.css";
import About from "./components/About";
import Header from "./header";
import Main from "./home";
import { ThemeContext } from "./CreateTheme";
import ContactForm from "./components/ContactForm";


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
