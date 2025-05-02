import "./App.css";
import About from "./components/About";
import Header from "./header";
import Main from "./home";

function App() {

  return (
    <div className="App">
      <Header />
      
      {/* <h1>Current Theme: {theme}</h1> */}
      <Main />
      <About />
    </div>
  );
}

export default App;
