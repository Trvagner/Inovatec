import React from 'react'
import styles from './Formulario.module.css'

export default function Formulario(props) {
  
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}
  
  return (
    <div className={styles.entrada}>
        <label>
            {props.label}
        </label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}
