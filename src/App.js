import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inseed from "./Inseed";
import Service from "./Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inseed />} />
        <Route path="services/:service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
