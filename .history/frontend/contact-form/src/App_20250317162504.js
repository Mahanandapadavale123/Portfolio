import "./App.css";
import About from "./components/About";
import Header from "./header";
import Main from "./home";
import { ThemeContext } from "./CreateTheme";
import ContactForm from "./components/ContactForm";

function App() {

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme: "light" }}>
        <Header />
        <Main />
        <About />
        <ContactForm />
    
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
