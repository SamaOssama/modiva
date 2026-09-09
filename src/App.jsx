import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import Dashboard from "./pages/Dashboard/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
