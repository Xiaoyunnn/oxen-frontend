import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NoiseMonitoringSys from "./pages/noiseMonitoringSys/NoiseMonitoringSys";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route
          path="/noise-monitoring-system"
          element={<NoiseMonitoringSys />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
