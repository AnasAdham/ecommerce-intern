import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Homepage from "./components/Pages/Homepage";

function App() {
  return (
    <div className="grid grid-cols-1">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
