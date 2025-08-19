import { Routes, Route } from "react-router-dom";
import VotingPage from "./pages/VotingPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}
