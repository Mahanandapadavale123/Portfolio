import "./App.css";
import About from "./components/About";
import Header from "./header";
import Main from "./home";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      
     <ContactForm />

    </div>
  );
}

export default App;
