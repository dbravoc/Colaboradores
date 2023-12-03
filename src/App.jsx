import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Alerta from './components/Alerta';
import { BaseColaboradores } from './BaseColaboradores';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtrados, setFiltrados] = useState(colaboradores);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    const nuevoId = colaboradores.length + 1;
    
    const colaboradorConId = { ...nuevoColaborador, id: nuevoId.toString() };

    const nuevosColaboradores = [...colaboradores, colaboradorConId];
    setColaboradores(nuevosColaboradores);

    if (terminoBusqueda) {
        const resultados = nuevosColaboradores.filter((colaborador) =>
            Object.values(colaborador).some((valor) =>
                valor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            )
        );
        setFiltrados(resultados);
    } else {
        setFiltrados(nuevosColaboradores);
    }
};

useEffect(() => {
  const filtrarColaboradores = () => {
    if (terminoBusqueda) {
      const resultados = colaboradores.filter((colaborador) =>
          Object.values(colaborador).some((valor) =>
              valor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          )
      );
      setFiltrados(resultados);
    } else {
      setFiltrados(colaboradores);
    }
  };

  filtrarColaboradores();
}, [terminoBusqueda, colaboradores]);

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ mensaje, tipo });
    setTimeout(() => setAlerta({ mensaje: '', tipo: '' }), 3000);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Formulario onAgregarColaborador={agregarColaborador} onMostrarAlerta={mostrarAlerta} />
            {alerta.mensaje && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />}
        </Col>

        <Col md={1}>

        </Col>

        <Col md={8}>
          <h1>Usuarios registrados</h1>
          <Buscador onBuscar={setTerminoBusqueda} />
          <Listado colaboradores={filtrados} />
        </Col>
      </Row>

    </Container>

);
};

export default App;
