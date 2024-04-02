// Button.stories.jsx
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from './Button';

// Definición de metadatos del componente
const meta = {
  title: 'Button',
  tags:['autodocs'],
  component: Button,
};

export default meta;

// Template del botón con props variables
const Template = ({ color, children }) => (
  <Button color={color}>{children}</Button>
);

// Historia para un botón primario azul
export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Primary Button',
};

// Historia para un botón secundario verde
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary Button',
};

// Historia para un botón de advertencia rojo
export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: 'Warning Button',
};
export const Info = Template.bind({});
Info.args = {
  color: 'info',
  children: 'Info Button',
};
