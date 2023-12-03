import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, FormControl, InputGroup, Container, Row, Col } from 'react-bootstrap';

const Formulario = ({ onAgregarColaborador, onMostrarAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const campos = [
    { label: 'Nombre', name: 'nombre', type: 'text' },
    { label: 'Correo', name: 'correo', type: 'email' },
    { label: 'Edad', name: 'edad', type: 'number' },
    { label: 'Cargo', name: 'cargo', type: 'text' },
    { label: 'Teléfono', name: 'telefono', type: 'tel' },
  ];

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(nuevoColaborador).every((value) => value.trim())) {
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
    <Container>
      <Row>
        <Col>
          <h1>
            Registrate
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            {campos.map((campo) => (
              <InputGroup className="m-3" key={campo.name}>
                <FormControl
                  type={campo.type}
                  name={campo.name}
                  placeholder={campo.label}
                  value={nuevoColaborador[campo.name]}
                  onChange={handleChange}
                />
              </InputGroup>
            ))}

            <Button variant="info" type="submit" className='col-md-12 m-3'>
              Agregar Colaborador
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Formulario.propTypes = {
  onAgregarColaborador: PropTypes.func.isRequired,
  onMostrarAlerta: PropTypes.func.isRequired
};

export default Formulario;
