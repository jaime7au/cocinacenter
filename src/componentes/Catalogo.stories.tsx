import type { Meta, StoryObj } from '@storybook/react';
import Catalogo from './Catalogo';

const meta = {
  title: 'Componentes/Catalogo',
  component: Catalogo,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Catalogo>;

export default meta;
type Story = StoryObj<typeof meta>;

const productosEjemplo = [
  {
    id: '1',
    nombre: 'Cocina Integral Modular 6 Pzas',
    precio: 5500,
    precioAnterior: 6200,
    imagen: 'modular6',
    tag: 'Oferta',
    categoria: 'cocinas-integrales'
  },
  {
    id: '2',
    nombre: 'Cocina Moderna Minimalista 8 Pzas',
    precio: 8900,
    imagen: 'moderna8',
    tag: 'Popular',
    categoria: 'cocinas-integrales'
  },
  {
    id: '3',
    nombre: 'Cocina Clásica Elegante 5 Pzas',
    precio: 4800,
    imagen: 'clasica5',
    tag: 'Nuevo',
    categoria: 'cocinas-integrales'
  }
];

export const Default: Story = {
  args: {
    productos: productosEjemplo,
    titulo: 'Productos Destacados'
  }
};

export const SinVerTodo: Story = {
  args: {
    productos: productosEjemplo,
    titulo: 'Productos Recientes',
    mostrarVerTodo: false
  }
};
