import Inscripcion from "../components/Inscripcion";
import TarjetaActividad from "../components/TarjetaActividad";



function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <div className="row g-4">
      {inscripciones.map((item) => (
        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
            <Inscripcion
                inscripcion={item}
                onEliminar={onEliminar}



            />
          
        </div>
      ))}
    </div>
  );
}

export default MisInscripciones;
