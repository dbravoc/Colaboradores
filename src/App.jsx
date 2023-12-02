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

  const agregarColaborador = (nuevoColaborador) => {
    // Genera un nuevo ID basado en la longitud del arreglo de colaboradores
    const nuevoId = colaboradores.length + 1;
    
    // Crear un nuevo colaborador con el ID generado
    const colaboradorConId = { ...nuevoColaborador, id: nuevoId.toString() };

    // Agregar el nuevo colaborador al arreglo de colaboradores
    const nuevosColaboradores = [...colaboradores, colaboradorConId];
    setColaboradores(nuevosColaboradores);

    // Actualizar la lista filtrada si hay un término de búsqueda
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
    <div>
      <Buscador onBuscar={setTerminoBusqueda} />
      <Listado colaboradores={filtrados} />

      <Formulario onAgregarColaborador={agregarColaborador} onMostrarAlerta={mostrarAlerta} />
      {alerta.mensaje && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />}
    </div>
  );
};

export default App;
