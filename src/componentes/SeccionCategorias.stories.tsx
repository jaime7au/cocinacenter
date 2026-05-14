import type { Meta, StoryObj } from '@storybook/react';
import SeccionCategorias from './SeccionCategorias';

const meta = {
  title: 'Componentes/SeccionCategorias',
  component: SeccionCategorias
} satisfies Meta<typeof SeccionCategorias>;

export default meta;
type Story = StoryObj<typeof meta>;

const categoriasEjemplo = [
  { id: 'cocinas-integrales', nombre: 'Cocinas Integrales', icono: '🍳', cantidad: 24 },
  { id: 'closets', nombre: 'Closets', icono: '🚪', cantidad: 12 },
  { id: 'muebles-bano', nombre: 'Muebles de Baño', icono: '🚿', cantidad: 8 },
  { id: 'camas', nombre: 'Camas', icono: '🛏️', cantidad: 15 }
];

export const Default: Story = {
  args: {
    categorias: categoriasEjemplo
  }
};
