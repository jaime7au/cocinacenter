import React from 'react';
import { Categoria } from '../PaginaInicio';

export interface SeccionCategoriasProps {
  categorias: Categoria[];
  onCategoriaClick?: (categoria: Categoria) => void;
}

const SeccionCategorias: React.FC<SeccionCategoriasProps> = ({
  categorias,
  onCategoriaClick
}) => {
  return (
    <section className="seccion-categorias">
      <div className="seccion-encabezado">
        <h2 className="seccion-titulo">
          Explora Nuestras <span>Categorías</span>
        </h2>
        <a href="#" className="ver-todo">Ver todo →</a>
      </div>

      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="tarjeta-categoria"
            onClick={() => onCategoriaClick?.(categoria)}
          >
            <span className="categoria-icono">{categoria.icono}</span>
            <h3 className="categoria-nombre">{categoria.nombre}</h3>
            <span className="categoria-cantidad">{categoria.cantidad} productos</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeccionCategorias;
