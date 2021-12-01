import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import NoiseMonitoringSys from "./pages/NoiseMonitoringSys";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SolarPanels from "./pages/SolarPanels";
import Tss from "./pages/Tss";
import Skycam from "./pages/Skycam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route
          path="/noise-monitoring-system"
          element={<NoiseMonitoringSys />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solar-panels" element={<SolarPanels />} />
        <Route path="/tss" element={<Tss />} />
        <Route path="/cctv-surveillance" element={<SolarPanels />} />
        <Route path="/skycam" element={<Skycam />} />
      </Routes>
    </Router>
  );
}

export default App;
