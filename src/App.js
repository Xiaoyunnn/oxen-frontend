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
import VibrationSys from "./pages/VibrationSys";
import CctvSurveillance from "./pages/CctvSurveillance";
import BiometricSys from "./pages/BiometricSys";
import CctvCameras from "./pages/CctvCameras";

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
        <Route path="/cctv-surveillance" element={<CctvSurveillance />} />
        <Route path="/cctv-cameras" element={<CctvCameras />} />
        <Route path="/skycam" element={<Skycam />} />
        <Route path="/vibration-monitoring-system" element={<VibrationSys />} />
        <Route
          path="/biometric-authentication-system"
          element={<BiometricSys />}
        />
      </Routes>
    </Router>
  );
}

export default App;
