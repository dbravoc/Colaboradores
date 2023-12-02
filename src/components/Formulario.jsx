import { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ onAgregarColaborador, onMostrarAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoColaborador.nombre.trim() || !nuevoColaborador.correo.trim() || !nuevoColaborador.edad.trim() || !nuevoColaborador.cargo.trim() || !nuevoColaborador.telefono.trim()) {
      onMostrarAlerta('Todos los campos son obligatorios', 'error');
      return;
    }
    onAgregarColaborador(nuevoColaborador);
    onMostrarAlerta('Colaborador agregado con éxito', 'success');
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nuevoColaborador.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={nuevoColaborador.correo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          value={nuevoColaborador.edad}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Cargo:</label>
        <input
          type="text"
          name="cargo"
          value={nuevoColaborador.cargo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Teléfono:</label>
        <input
          type="tel"
          name="telefono"
          value={nuevoColaborador.telefono}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Agregar Colaborador</button>
    </form>
  );
  
};

Formulario.propTypes = {
  onAgregarColaborador: PropTypes.func.isRequired,
  onMostrarAlerta: PropTypes.func.isRequired
};

export default Formulario;
