import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta = {
  title: 'Componentes/Hero',
  component: Hero
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ConImagenPersonalizada: Story = {
  args: {
    titulo: 'Cocinas que Transforman tu Hogar',
    subtitulo: 'Diseños modernos y funcionales para la cocina de tus sueños.',
    textoBoton: 'Ver Catálogo',
    imagenSrc: '🍳'
  }
};
