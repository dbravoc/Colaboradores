import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Alerta from './components/Alerta';
import { BaseColaboradores } from './BaseColaboradores'; // Asegúrate de que la ruta sea correcta

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtrados, setFiltrados] = useState(colaboradores);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  useEffect(() => {
    const filtrarColaboradores = () => {
      if (!terminoBusqueda) {
        setFiltrados(colaboradores);
      } else {
        const resultados = colaboradores.filter((colaborador) =>
          Object.values(colaborador).some((valor) =>
            valor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          )
        );
        setFiltrados(resultados);
      }
    };

    filtrarColaboradores();
  }, [terminoBusqueda, colaboradores]);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ mensaje, tipo });
    setTimeout(() => setAlerta({ mensaje: '', tipo: '' }), 3000);
  };

  return (
    <div>
      <Buscador onBuscar={setTerminoBusqueda} />
      <Listado colaboradores={filtrados} />

      <Formulario onAgregarColaborador={agregarColaborador} onMostrarAlerta={mostrarAlerta} />
      {alerta.mensaje && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />}
    </div>
  );
};

export default App;
