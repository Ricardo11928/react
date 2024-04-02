import React from 'react';
import './Button.css';
/**
 * Componente de boton reurilizable
 * @param children
 * @param color
 * @example <Button color="primary">Enviar</Button>
 * @example <Button color="secondary">Cancelar</Button>
 * @prop color - color del boton
 * @prop children - contenido del boton
 * @returns 
 */
const Button = ({ children, color }:any) => {
  return (
    <button className={`button ${color}`}>
      {children}
    </button>
  );
}

export default Button;