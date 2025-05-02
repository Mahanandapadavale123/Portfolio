import "./App.css";
import About from "./components/About";
import Header from "./header";
import Main from "./home";
import Skills from "./skills";
import Projects from "./projects";
import ContactForm from "./components/ContactForm";

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
     <ContactForm />

    </div>
  );
}

export default App;
