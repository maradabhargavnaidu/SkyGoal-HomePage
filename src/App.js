import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Choose from "./components/Choose";
import Differentiate from "./components/Differentiate";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Services />
      <Choose />
      <Differentiate />
    </div>
  );
}

export default App;
