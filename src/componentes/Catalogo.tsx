import React from 'react';
import { Producto } from '../PaginaInicio';
import TarjetaProducto from './TarjetaProducto';

export interface CatalogoProps {
  productos: Producto[];
  titulo: string;
  onProductoClick?: (producto: Producto) => void;
  onWhatsAppClick?: (producto: Producto) => void;
  mostrarVerTodo?: boolean;
  onVerTodoClick?: () => void;
}

const Catalogo: React.FC<CatalogoProps> = ({
  productos,
  titulo,
  onProductoClick,
  onWhatsAppClick,
  mostrarVerTodo = true,
  onVerTodoClick
}) => {
  const partesTitulo = titulo.split(' ');
  const ultimaPalabra = partesTitulo.slice(-1).join('');

  return (
    <section className="seccion-catalogo">
      <div className="seccion-encabezado">
        <h2 className="seccion-titulo">
          {partesTitulo.slice(0, -1).join(' ')} <span>{ultimaPalabra}</span>
        </h2>
        {mostrarVerTodo && (
          <button className="ver-todo" onClick={onVerTodoClick}>Ver todo</button>
        )}
      </div>

      <div className="productos-grid">
        {productos.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            onClick={() => onProductoClick?.(producto)}
            onWhatsAppClick={() => onWhatsAppClick?.(producto)}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
