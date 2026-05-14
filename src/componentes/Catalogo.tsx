import React from 'react';
import { Producto } from '../PaginaInicio';
import TarjetaProducto from './TarjetaProducto';

export interface CatalogoProps {
  productos: Producto[];
  titulo: string;
  onProductoClick?: (producto: Producto) => void;
  mostrarVerTodo?: boolean;
}

const Catalogo: React.FC<CatalogoProps> = ({
  productos,
  titulo,
  onProductoClick,
  mostrarVerTodo = true
}) => {
  return (
    <section className="seccion-catalogo">
      <div className="seccion-encabezado">
        <h2 className="seccion-titulo">
          {titulo.split(' ').slice(0, -1).join(' ')} <span>{titulo.split(' ').slice(-1)}</span>
        </h2>
        {mostrarVerTodo && (
          <a href="#" className="ver-todo">Ver todo →</a>
        )}
      </div>

      <div className="productos-grid">
        {productos.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            onClick={() => onProductoClick?.(producto)}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
