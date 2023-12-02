import PropTypes from 'prop-types';

const Alerta = ({ mensaje, tipo }) => {
  return (
    <div className={`alerta ${tipo}`}>
      {mensaje}
    </div>
  );
};

Alerta.propTypes = {
  mensaje: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(['success', 'error']).isRequired
};

export default Alerta;
