import "./App.css";
import { Route, Routes, UseNavigate, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Landing } from "./pages/Landing/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <h1>Henry Dogs</h1>
    </div>
  );
}

export default App;
