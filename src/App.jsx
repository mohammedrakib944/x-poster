import "./App.css";
import Nav from "./components/navigation/Nav";
import Home from "./pages/home/Home";
import Poster from "./pages/poster/Poster";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poster-generator" element={<Poster />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
