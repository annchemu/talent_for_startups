import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./components/home";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Signup from "./components/signup.js";

function App() {
  return (
    <Router>
        <div className="App">
            
            <Navbar/>
            <Routes>
                <Route path="/"  element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </div>
    </Router>
  );
}
export default App;
