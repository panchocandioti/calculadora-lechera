import React from 'react'

function ReposicionEfectiva(props) {
  return (
    <div>
      {(props.validacion1 === false || props.validacion2 === false) && (<div>
        <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
      </div>)}
      {props.validacion1 && props.validacion2 && (<div>
        <p>Proporción global crías hembras: <span style={{ color: 'red', fontWeight: 600 }}>{(props.hembrasProporcion * 100).toFixed(1)}%</span></p>
        <div className='resultados'>
          <h4>REPOSICIÓN ANUAL</h4>
          <h4>Corto plazo: <span style={{ color: 'red' }}>{(props.reposicionCP).toFixed(1)}%</span></h4>
          <h4>Largo plazo: <span style={{ color: 'red' }}>{(props.reposicionLP).toFixed(1)}%</span></h4>
        </div>
      </div>
      )}
    </div>
  )
}

export default ReposicionEfectiva