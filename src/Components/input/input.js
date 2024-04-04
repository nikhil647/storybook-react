import React from 'react'
import './input.css';

function Input(props) {

  const { variant = 'med', children, ...rest } = props;

  return (
    <input className={`input ${variant}`} {...rest} />
  )
}

export default Input;