import { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Buscador = ({ onBuscar }) => {
  const [termino, setTermino] = useState('');

  const handleChange = (e) => {
    setTermino(e.target.value);
    onBuscar(e.target.value);
  };

  return (
    <div>
      <InputGroup className='mb-3'>
        <FormControl
          type="text"
          placeholder="Buscar colaborador..."
          value={termino}
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
};

Buscador.propTypes = {
  onBuscar: PropTypes.func.isRequired
};

export default Buscador;
