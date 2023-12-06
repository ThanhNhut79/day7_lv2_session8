import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ButtonBackToTop from "./Components/BackTop/BackToTop";
import DemChu from "./Components/Bai2/DemChu";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="Header">
          <ul>
            <li>
              <Link to="/">
                <button>Bai 1</button>
              </Link>
            </li>
            <li>
              <Link to="/bai2">
                <button>Bai 2</button>
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<ButtonBackToTop />} />
          <Route path="/bai2" element={<DemChu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
