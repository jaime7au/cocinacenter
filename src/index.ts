// Módulo de Inicio - Catálogo de Cocinas Center
// Este módulo contiene la página principal con el catálogo de productos

import './styles.css';

export { default as PaginaInicio } from './PaginaInicio';
export { default as Catalogo } from './componentes/Catalogo';
export { default as TarjetaProducto } from './componentes/TarjetaProducto';
export { default as BarraNavegacion } from './componentes/BarraNavegacion';
export { default as Hero } from './componentes/Hero';
export { default as SeccionCategorias } from './componentes/SeccionCategorias';
export { default as BarraConfianza } from './componentes/BarraConfianza';

// Exportar tipos
export type { Producto, Categoria, PaginaInicioProps } from './PaginaInicio';
export type { CatalogoProps } from './componentes/Catalogo';
export type { TarjetaProductoProps } from './componentes/TarjetaProducto';
export type { HeroProps } from './componentes/Hero';
export type { SeccionCategoriasProps } from './componentes/SeccionCategorias';
export type { BarraNavegacionProps } from './componentes/BarraNavegacion';
