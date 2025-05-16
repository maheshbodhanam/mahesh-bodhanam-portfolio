import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Lazy-loaded pages
const Home = lazy(() => import("./components/Home"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
