import "./App.css";
import Nav from "./components/navigation/Nav";
import Home from "./pages/home/Home";
import Poster from "./pages/poster/Poster";
import About from "./pages/about/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/poster-generator" element={<Poster />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
