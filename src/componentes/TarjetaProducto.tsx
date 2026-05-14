import React from 'react';
import { Producto } from '../PaginaInicio';

export interface TarjetaProductoProps {
  producto: Producto;
  onClick?: () => void;
}

const formatearPrecio = (precio: number): string => `Q ${precio.toLocaleString('es-GT')}`;

const ProductoRender: React.FC<{ variante: string }> = ({ variante }) => (
  <svg className={`producto-render producto-render-${variante}`} viewBox="0 0 280 180" role="img" aria-label="Vista del producto">
    <rect x="0" y="0" width="280" height="180" rx="18" className="render-fondo" />
    <ellipse cx="142" cy="154" rx="92" ry="12" className="render-sombra" />
    <rect x="46" y="42" width="188" height="48" rx="5" className="render-alacena" />
    <rect x="53" y="48" width="39" height="36" rx="3" className="render-puerta" />
    <rect x="96" y="48" width="39" height="36" rx="3" className="render-puerta" />
    <rect x="139" y="48" width="39" height="36" rx="3" className="render-puerta" />
    <rect x="182" y="48" width="39" height="36" rx="3" className="render-puerta" />
    <rect x="42" y="92" width="196" height="10" rx="4" className="render-top" />
    <rect x="50" y="102" width="180" height="48" rx="5" className="render-base" />
    <rect x="57" y="108" width="42" height="36" rx="3" className="render-puerta" />
    <rect x="103" y="108" width="34" height="36" rx="3" className="render-puerta" />
    <rect x="141" y="108" width="42" height="36" rx="3" className="render-puerta" />
    <rect x="187" y="108" width="34" height="36" rx="3" className="render-puerta" />
    <rect x="70" y="65" width="12" height="3" rx="2" className="render-manija" />
    <rect x="113" y="65" width="12" height="3" rx="2" className="render-manija" />
    <rect x="156" y="65" width="12" height="3" rx="2" className="render-manija" />
    <rect x="199" y="65" width="12" height="3" rx="2" className="render-manija" />
    <rect x="72" y="125" width="12" height="3" rx="2" className="render-manija" />
    <rect x="114" y="125" width="12" height="3" rx="2" className="render-manija" />
    <rect x="156" y="125" width="12" height="3" rx="2" className="render-manija" />
    <rect x="198" y="125" width="12" height="3" rx="2" className="render-manija" />
  </svg>
);

const TarjetaProducto: React.FC<TarjetaProductoProps> = ({ producto, onClick }) => {
  const abrirProducto = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick?.();
  };

  return (
    <article className="tarjeta-producto" onClick={onClick}>
      <div className="producto-imagen">
        <ProductoRender variante={producto.imagen} />
        {producto.tag && <span className="producto-tag">{producto.tag}</span>}
      </div>

      <div className="producto-info">
        <h3 className="producto-nombre">{producto.nombre}</h3>
        {producto.descripcion && <p className="producto-descripcion">{producto.descripcion}</p>}

        <div className="producto-meta">
          {producto.material && <span>{producto.material}</span>}
          {producto.medidas && <span>{producto.medidas}</span>}
        </div>

        <div className="producto-precio">
          <span className="precio-actual">{formatearPrecio(producto.precio)}</span>
          {producto.precioAnterior && <span className="precio-anterior">{formatearPrecio(producto.precioAnterior)}</span>}
        </div>

        <div className="producto-acciones">
          <div className="producto-calificacion">
            <span className="estrellas">★★★★★</span>
            <span>{producto.rating?.toFixed(1) ?? '5.0'}</span>
          </div>
          <button className="btn-ver" onClick={abrirProducto}>Ver</button>
        </div>
      </div>
    </article>
  );
};

export default TarjetaProducto;
