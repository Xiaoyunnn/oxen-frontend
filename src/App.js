import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NoiseMonitoringSys from "./pages/noiseMonitoringSys/NoiseMonitoringSys";
import Solutions from "./pages/solutions/Solutions";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";

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
      </Routes>
    </Router>
  );
}

export default App;
