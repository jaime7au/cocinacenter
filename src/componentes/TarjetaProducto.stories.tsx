import type { Meta, StoryObj } from '@storybook/react';
import TarjetaProducto from './TarjetaProducto';

const meta = {
  title: 'Componentes/TarjetaProducto',
  component: TarjetaProducto,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TarjetaProducto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConOferta: Story = {
  args: {
    producto: {
      id: '1',
      nombre: 'Cocina Integral Modular 6 Pzas',
      precio: 5500,
      precioAnterior: 6200,
      imagen: 'modular6',
      tag: 'Oferta',
      categoria: 'cocinas-integrales'
    }
  }
};

export const SinOferta: Story = {
  args: {
    producto: {
      id: '2',
      nombre: 'Cocina Compacta 4 Pzas',
      precio: 2900,
      imagen: 'compacta4',
      categoria: 'cocinas-integrales'
    }
  }
};
