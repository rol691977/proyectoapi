const Buscador = ({ setBusqueda }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control form-control-lg border-primary shadow-sm"
        placeholder="🔍 Busca una serie por su nombre (ej: Breaking Bad)..."
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
};

export default Buscador;