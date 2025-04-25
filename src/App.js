import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import "./index.css";
import Home from "./pages/home";
import Result from "./pages/result";
import Review from "./pages/review";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/review" element={<Review />} />

    </Routes>
  </Router> 
   );
}

export default App;
