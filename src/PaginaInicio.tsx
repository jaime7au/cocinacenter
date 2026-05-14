import React from 'react';
import BarraNavegacion from './componentes/BarraNavegacion';
import Hero from './componentes/Hero';
import SeccionCategorias from './componentes/SeccionCategorias';
import Catalogo from './componentes/Catalogo';
import BarraConfianza from './componentes/BarraConfianza';

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  tag?: string;
  categoria: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  icono: string;
  cantidad: number;
}

export interface PaginaInicioProps {
  productosDestacados?: Producto[];
  productosRecientes?: Producto[];
  categorias?: Categoria[];
  onProductoClick?: (producto: Producto) => void;
  onCategoriaClick?: (categoria: Categoria) => void;
  onCarritoClick?: () => void;
}

const productosDefault: Producto[] = [
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
  },
  {
    id: '4',
    nombre: 'Cocina Compacta 4 Pzas',
    precio: 2900,
    imagen: 'compacta4',
    categoria: 'cocinas-integrales'
  },
  {
    id: '5',
    nombre: 'Cocina Rural Tradicional 6 Pzas',
    precio: 4200,
    imagen: 'rural6',
    categoria: 'cocinas-integrales'
  },
  {
    id: '6',
    nombre: 'Cocina Negra 8 Pzas',
    precio: 4800,
    precioAnterior: 5500,
    imagen: 'negra8',
    tag: 'Popular',
    categoria: 'cocinas-integrales'
  }
];

const categoriasDefault: Categoria[] = [
  { id: 'cocinas-integrales', nombre: 'Cocinas Integrales', icono: '🍳', cantidad: 24 },
  { id: 'closets', nombre: 'Closets', icono: '🚪', cantidad: 12 },
  { id: 'muebles-bano', nombre: 'Muebles de Baño', icono: '🚿', cantidad: 8 },
  { id: 'camas', nombre: 'Camas', icono: '🛏️', cantidad: 15 },
  { id: 'roperos', nombre: 'Roperos', icono: '👔', cantidad: 10 },
  { id: 'comodas', nombre: 'Comodas', icono: '🗄️', cantidad: 6 },
  { id: 'mesas', nombre: 'Mesas', icono: '🪑', cantidad: 18 },
  { id: 'accesorios', nombre: 'Accesorios', icono: '🔧', cantidad: 42 }
];

const PaginaInicio: React.FC<PaginaInicioProps> = ({
  productosDestacados = productosDefault,
  productosRecientes = productosDefault.slice(0, 4),
  categorias = categoriasDefault,
  onProductoClick,
  onCategoriaClick,
  onCarritoClick
}) => {
  return (
    <div className="pagina-inicio">
      <BarraNavegacion onCarritoClick={onCarritoClick} />

      <Hero />

      <BarraConfianza />

      <SeccionCategorias
        categorias={categorias}
        onCategoriaClick={onCategoriaClick}
      />

      <Catalogo
        productos={productosDestacados}
        titulo="Productos Destacados"
        onProductoClick={onProductoClick}
      />

      <Catalogo
        productos={productosRecientes}
        titulo="Recién Llegados"
        onProductoClick={onProductoClick}
      />
    </div>
  );
};

export default PaginaInicio;
