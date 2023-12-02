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
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Nombre</InputGroup.Text>
              <FormControl
                type="text"
                name="nombre"
                value={nuevoColaborador.nombre}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Correo</InputGroup.Text>
              <FormControl
                type="email"
                name="correo"
                value={nuevoColaborador.correo}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Edad</InputGroup.Text>
              <FormControl
                type="number"
                name="edad"
                value={nuevoColaborador.edad}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Cargo</InputGroup.Text>
              <FormControl
                type="text"
                name="cargo"
                value={nuevoColaborador.cargo}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Teléfono</InputGroup.Text>
              <FormControl
                type="tel"
                name="telefono"
                value={nuevoColaborador.telefono}
                onChange={handleChange}
              />
            </InputGroup>

            <Button variant="primary" type="submit">Agregar Colaborador</Button>
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
