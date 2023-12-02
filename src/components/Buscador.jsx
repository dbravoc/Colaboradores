// Buscador.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
const Buscador = ({ onBuscar }) => {
  const [termino, setTermino] = useState('');

  const handleChange = (e) => {
    setTermino(e.target.value);
    onBuscar(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar colaborador..."
        value={termino}
        onChange={handleChange}
      />
    </div>
  );
};

Buscador.propTypes = {
  onBuscar: PropTypes.func.isRequired
};

export default Buscador;
