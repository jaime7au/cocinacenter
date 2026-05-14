import React from 'react';
import { Categoria } from '../PaginaInicio';

export interface SeccionCategoriasProps {
  categorias: Categoria[];
  onCategoriaClick?: (categoria: Categoria) => void;
  onVerTodoClick?: () => void;
}

const SeccionCategorias: React.FC<SeccionCategoriasProps> = ({
  categorias,
  onCategoriaClick,
  onVerTodoClick
}) => {
  return (
    <section className="seccion-categorias">
      <div className="seccion-encabezado">
        <h2 className="seccion-titulo">Explora nuestras <span>categorias</span></h2>
        <button className="ver-todo" onClick={onVerTodoClick}>Ver todo</button>
      </div>

      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            className="tarjeta-categoria"
            onClick={() => onCategoriaClick?.(categoria)}
          >
            <span className="categoria-icono">{categoria.icono}</span>
            <span className="categoria-nombre">{categoria.nombre}</span>
            <span className="categoria-cantidad">{categoria.cantidad} productos</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default SeccionCategorias;
