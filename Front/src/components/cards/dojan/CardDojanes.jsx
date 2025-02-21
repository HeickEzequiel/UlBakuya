import React from 'react'

function CardDojanes(props) {
  console.log(props)
  return (
    <div>
      <img src={props.imagen} alt="no se puede ver la imagen" />
      <h1>Club: {props.club}</h1>
      <h1>Dirección: {props.direccion}</h1>
      <h1>Horarios: {props.horarios}</h1>
      <h1>Profesores: {props.profesores}</h1>
    </div>
  )
}

export default CardDojanes