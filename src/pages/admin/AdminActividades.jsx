import { Link, useParams } from "react-router-dom";
import { actividades } from "../../data/actividades";
import FormularioActividad from "./FormularioActividad";

function DetalleActividad() {
  const { id } = useParams();
  const actividad = actividades.find(
    (item) => item.id === Number(id)
  );

  if (!actividad) return <p>La actividad solicitada no existe.</p>;

  return (
    <main className="container py-4">
      <h1>Administracion de actividades </h1>
      <FormularioActividad onGuardar={onGuardar} />
    </main>
  );
}

export default DetalleActividad;
