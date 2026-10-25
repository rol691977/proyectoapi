import { useState, useEffect } from 'react';

const MiApi = ({ busqueda }) => {
  const [series, setSeries] = useState([]);

  // Consumo de la API de TVMaze
  const obtenerDatos = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      setSeries(data); // Guardamos el array de series
    } catch (error) {
      console.error("Error al consumir la API de series", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  // Filtramos las series por nombre
  const seriesFiltradas = series.filter((serie) =>
    serie.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Limitamos a 24 resultados para que la galería no sea inmensa al inicio
  const seriesMostrar = seriesFiltradas.slice(0, 24);

  return (
    <div>
      {/* Grilla de resultados */}
      <div className="row g-4">
        {seriesMostrar.map((serie) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={serie.id}>
            <div className="card h-100 shadow-sm border-primary">
              <img
                src={serie.image?.medium}
                className="card-img-top"
                alt={serie.name}
                style={{ height: '350px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column bg-light">
                <h5 className="card-title text-primary fw-bold">{serie.name}</h5>
                <p className="card-text mb-1">
                  <strong>Género:</strong> {serie.genres?.join(', ')}
                </p>
                <p className="card-text">
                  <strong>⭐ Rating:</strong> {serie.rating?.average || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contador dinámico debajo del listado */}
      <div className="text-center mt-4 mb-4">
        <p className="text-muted fw-bold">
          Mostrando {seriesMostrar.length} / {series.length} series
        </p>
      </div>
    </div>
  );
};

export default MiApi;