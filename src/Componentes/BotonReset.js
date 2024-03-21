import React from 'react';

// Este componente sólo proporciona un botón de RESET para recargar la página

function BotonReset() {
  const recargaPagina = () => {
    window.location.reload();
  };

  return (
    <button className="button" onClick={recargaPagina}>REINICIAR</button>
  );
}

export default BotonReset;