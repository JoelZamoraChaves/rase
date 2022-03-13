import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
  
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <About/>
        <Products/>
        <Contact/>
      </div>
      </div>
 
  );
}

export default App;
