
import './App.css';
import MesaNav from "./Components/Navbar/MesaNav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Instagram from "./Components/Instagram/Instagram";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <MesaNav />
      <Home />
      <Instagram />

      <Projects />
      {/* <Contact /> */}

      <About />
      {/* <Services /> */}
      <Footer />
    </div>
  );
}

export default App;
