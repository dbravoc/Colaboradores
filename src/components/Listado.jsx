import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';



const Listado = ({ colaboradores }) => { // <--- Cambio aquí
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
      {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Listado.propTypes = {
  colaboradores: PropTypes.func.isRequired,
};

export default Listado;
