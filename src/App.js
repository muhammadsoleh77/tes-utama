import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import DataTypicode from './components/DataTypicode';
import Hashing from './components/Hashing';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dataTypicode" element={<DataTypicode />} />
        <Route path="/hashing" element={<Hashing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
