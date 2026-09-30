function MisInscripciones({ inscripciones, onEliminar }) {
  if (inscripciones.length === 0) {
    return <p className="text-muted">Aún no tienes inscripciones.</p>;
  }

  return (
    <ul className="list-group text-start">
      {inscripciones.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={item.id}
        >
          <span>
            {item.nombre} <small className="text-muted">({item.categoria})</small>
          </span>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onEliminar(item.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MisInscripciones;
