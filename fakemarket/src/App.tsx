import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TestStock from "./pages/TestStock";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/other" element={<TestStock />} />
      </Routes>
    </Router>
  );
}

export default App;
