import React from 'react';

// Este componente sólo proporciona un botón de RESET para recargar la página

function BotonReset() {
  const recargaPagina = () => {
    const isConfirmed = window.confirm('¿Está seguro de reiniciar la aplicación? (se perderá lo hecho hasta aquí)');
    if (isConfirmed) {
      window.location.reload();
    }
  };

  return (
    <button className="button" onClick={recargaPagina}>REINICIAR</button>
  );
}

export default BotonReset;