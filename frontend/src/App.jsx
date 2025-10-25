import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Learning = lazy(() => import("./pages/Learning"));

function App() {
  return (
      <Router>
        {/* Common Components */}
        <Navbar />
        {/* Suspense for lazy components */}
          <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
