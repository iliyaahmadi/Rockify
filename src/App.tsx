import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Discover from './pages/discover';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
