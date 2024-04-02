// Button.jsx
import React from 'react';
import './Button.css';
/**
 * Componente de botón
 * @component
 * @param  {string} color - Clase de color del botón
 * @param  {string} children - Contenido del botón
 * @return {React.Component} - Componente de botón
 * @prop {functio} onClick - Función que se ejecuta al hacer clic en el botón 
 * @example <Button color="primary">Primary Button</Button>
 */
const Button = ({ color, children }) => (
  <button className={`button ${color}`}>{children}</button>
);

export default Button;
