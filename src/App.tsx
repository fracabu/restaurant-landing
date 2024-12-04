import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Menu from './components/sections/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Reservations from './pages/Reservations';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            {/* Rotta per la Home con le sezioni Hero, Services e Menu */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Menu />
                  <Footer />
                </>
              }
            />
            {/* Rotta per la pagina Menù */}
            <Route path="/menu" element={<Menu />} />
            {/* Rotte per le altre pagine */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
