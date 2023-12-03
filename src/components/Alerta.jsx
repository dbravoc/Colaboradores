import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const Alerta = ({ mensaje, tipo }) => {
  const alertClass = tipo === 'success' ? 'alert-success' : 'alert-danger';

  return (
    <Alert className={`alerta ${alertClass}`}>
      {mensaje}
    </Alert>
  );
};

Alerta.propTypes = {
  mensaje: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(['success', 'danger']).isRequired
};

export default Alerta;
