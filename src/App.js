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
import NoiseMeter from "./pages/NoiseMeter";
import VibrationMeter from "./pages/VibrationMeter";

function App() {
  return (
    <Router>
      <Routes>
        {/* Navbar */}
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Solutions */}
        <Route path="/tss" element={<Tss />} />
        <Route
          path="/noise-monitoring-system"
          element={<NoiseMonitoringSys />}
        />
        <Route path="/vibration-monitoring-system" element={<VibrationSys />} />
        <Route path="/cctv-surveillance" element={<CctvSurveillance />} />
        <Route path="/skycam" element={<Skycam />} />
        <Route
          path="/biometric-authentication-system"
          element={<BiometricSys />}
        />

        {/* Products */}
        <Route path="/solar-panels" element={<SolarPanels />} />
        <Route path="/cctv-cameras" element={<CctvCameras />} />
        <Route path="/noise-meter" element={<NoiseMeter />} />
        <Route path="/vibration-meter" element={<VibrationMeter />} />
      </Routes>
    </Router>
  );
}

export default App;
