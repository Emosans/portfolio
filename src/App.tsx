import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work1 from "./pages/ProjectPages/Work1";
import Work2 from "./pages/ProjectPages/Work2";
import Work3 from "./pages/ProjectPages/Work3";
import Work4 from "./pages/ProjectPages/Work4";
import Work5 from "./pages/ProjectPages/Work5";
import Work6 from "./pages/ProjectPages/Work6";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
        <Route path="/work3" element={<Work3 />} />
        <Route path="/work4" element={<Work4 />} />
        <Route path="/work5" element={<Work5 />} />
        <Route path="/work6" element={<Work6 />} />
      </Routes>
    </Router>
  );
}

export default App;
