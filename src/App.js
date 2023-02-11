import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./styles/main.css";
import "animate.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/space-website" element={<Home />} />
          <Route path="/space-website/destination" element={<Destination />} />
          <Route path="/space-website/crew" element={<Crew />} />
          <Route path="/space-website/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
