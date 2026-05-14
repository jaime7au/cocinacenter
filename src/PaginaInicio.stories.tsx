import type { Meta, StoryObj } from '@storybook/react';
import PaginaInicio from './PaginaInicio';

const meta = {
  title: 'Páginas/PaginaInicio',
  component: PaginaInicio,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof PaginaInicio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ConProductosPersonalizados: Story = {
  args: {
    productosDestacados: [
      {
        id: '1',
        nombre: 'Cocina Integral Modular 6 Pzas',
        precio: 5500,
        precioAnterior: 6200,
        imagen: 'modular6',
        tag: 'Oferta',
        categoria: 'cocinas-integrales'
      }
    ]
  }
};
