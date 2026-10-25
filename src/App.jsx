import { useState } from 'react';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [busqueda, setBusqueda] = useState('');

  return (
    <div className="bg-light min-vh-100">

      <header className="bg-primary text-white text-center py-5 shadow-sm">
        <h1 className="display-4 fw-bold">TV Series Explorer</h1>
        <p className="lead">Descubre las mejores series de televisión consumiendo una API REST.</p>
      </header>

      <main className="container my-5">
        <section className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 text-center">
            <h2 className="mb-3 text-secondary">Buscador de Series</h2>
            <p className="text-muted">
              Encuentra tu próxima maratón filtrando el catálogo en tiempo real.
            </p>
            <Buscador setBusqueda={setBusqueda} />
          </div>
        </section>

        <section>
          <MiApi busqueda={busqueda} />
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">&copy; 2026 - Evaluación Front-End | API de Series</p>
      </footer>

    </div>
  );
}

export default App;