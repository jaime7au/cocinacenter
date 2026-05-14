import React from 'react';
import { Producto } from '../PaginaInicio';

export interface TarjetaProductoProps {
  producto: Producto;
  onClick?: () => void;
}

const formatearPrecio = (precio: number): string => {
  return `Q ${precio.toLocaleString('es-GT')}`;
};

const TarjetaProducto: React.FC<TarjetaProductoProps> = ({
  producto,
  onClick
}) => {
  return (
    <div className="tarjeta-producto" onClick={onClick}>
      <div className="producto-imagen">
        <span className="producto-placeholder">🍳</span>
        {producto.tag && (
          <span className="producto-tag">{producto.tag}</span>
        )}
      </div>

      <div className="producto-info">
        <h3 className="producto-nombre">{producto.nombre}</h3>

        <div className="producto-precio">
          <span className="precio-actual">{formatearPrecio(producto.precio)}</span>
          {producto.precioAnterior && (
            <span className="precio-anterior">
              {formatearPrecio(producto.precioAnterior)}
            </span>
          )}
        </div>

        <div className="producto-acciones">
          <div className="producto-calificacion">
          </div>
          <button className="btn-ver">Ver</button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
