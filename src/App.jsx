import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Alerta from './components/Alerta';
import { BaseColaboradores } from './BaseColaboradores'; // Asegúrate de que la ruta sea correcta

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ mensaje, tipo });
    setTimeout(() => setAlerta({ mensaje: '', tipo: '' }), 3000); // Remueve la alerta después de 3 segundos
  };

  const filtrarColaboradores = () => {
    if (!terminoBusqueda) return colaboradores;
    return colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(terminoBusqueda.toLowerCase())
        // Agrega más condiciones si es necesario
    );
  };

  return (
    <div>
      <Buscador onBuscar={setTerminoBusqueda} />
      <Formulario onAgregarColaborador={agregarColaborador} onMostrarAlerta={mostrarAlerta} />
      {alerta.mensaje && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />}
      <Listado colaboradores={filtrarColaboradores()} />
    </div>
  );
};

export default App;
