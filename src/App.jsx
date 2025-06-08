import { Routes, Route, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
}
