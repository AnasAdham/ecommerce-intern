import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Cart from "./components/Pages/Cart";
import Homepage from "./components/Pages/Homepage";
import About from "./components/Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-1">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
