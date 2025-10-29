import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import DS001 from "./DS001";

function App() {
  return (
    <BrowserRouter>
      {/* ナビゲーション */}
      <nav className="p-4 bg-slate-800 flex gap-4 text-gray-200">
        <Link to="/">🏠 Home</Link>
        <Link to="/ds001">🧠 DS001</Link>
      </nav>

      {/* ページ切り替え */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ds001" element={<DS001 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
