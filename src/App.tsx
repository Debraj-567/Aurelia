import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Journal from './pages/Journal';
import Dashboard from './pages/Dashboard';
import CustomCursor from './components/ui/CustomCursor';
import AIConcierge from './components/concierge/AIConcierge';

function App() {
  return (
    <div className="min-h-screen bg-primary flex flex-col font-sans">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
      <AIConcierge />
    </div>
  );
}

export default App;
