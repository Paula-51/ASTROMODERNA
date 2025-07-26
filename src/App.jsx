import './styles/App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Astrology from './pages/Astrology';
import Tarot from './pages/Tarot';
import TarotDetail from './pages/TarotDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astrologia" element={<Astrology />} />
        <Route path="/tarot" element={<Tarot />} />
        <Route path="/tarot/:id" element={<TarotDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



