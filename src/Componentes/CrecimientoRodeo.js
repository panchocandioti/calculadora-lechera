import React from 'react';

function CrecimientoRodeo(props) {

    const relacionReemplazosBajasCP = props.reposicionCP / props.bajas;
    const relacionReemplazosBajasLP = props.reposicionLP / props.bajas;

  return (
    <div>
      {(props.validacion1 === false || props.validacion2 === false) && (<div>
        <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
      </div>)}
      {props.validacion1 === true && props.validacion2 === true && (<div className='resultados'>
        <h4>RELACIÓN REEMPLAZOS / BAJAS</h4>
        <h4>Corto plazo: <span style={{ color: 'red' }}>{(relacionReemplazosBajasCP).toFixed(2)} / 1</span></h4>
        <h4>Largo plazo: <span style={{ color: 'red' }}>{(relacionReemplazosBajasLP).toFixed(2)} / 1</span></h4>
      </div>)}
      {props.validacion1 === true && props.validacion2 === true && (<div className='resultados'>
        <h4>CRECIMIENTO ANUAL DEL RODEO</h4>
        <h4>Corto plazo: <span style={{ color: 'red' }}>{(props.crecimientoCP).toFixed(1)}%</span></h4>
        <h4>Largo plazo: <span style={{ color: 'red' }}>{(props.crecimientoLP).toFixed(1)}%</span></h4>
      </div>)}
    </div>
  )
}

export default CrecimientoRodeo