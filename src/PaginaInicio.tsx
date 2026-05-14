import React, { useEffect, useMemo, useState } from 'react';
import BarraNavegacion, { PaginaActiva } from './componentes/BarraNavegacion';
import Hero from './componentes/Hero';
import SeccionCategorias from './componentes/SeccionCategorias';
import Catalogo from './componentes/Catalogo';
import BarraConfianza from './componentes/BarraConfianza';
import TarjetaProducto from './componentes/TarjetaProducto';

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  tag?: string;
  categoria: string;
  descripcion?: string;
  material?: string;
  medidas?: string;
  color?: string;
  rating?: number;
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
    nombre: 'Cocina Modular Linea Aurora',
    precio: 5500,
    precioAnterior: 6200,
    imagen: 'aurora',
    tag: 'Oferta',
    categoria: 'cocinas-integrales',
    descripcion: 'Frentes claros, alacenas superiores y cubierta compacta.',
    material: 'Melamina RH',
    medidas: '2.40 m',
    color: 'Blanco roble',
    rating: 4.9
  },
  {
    id: '2',
    nombre: 'Cocina Minimal Negra 8 Piezas',
    precio: 8900,
    imagen: 'minimal',
    tag: 'Popular',
    categoria: 'cocinas-integrales',
    descripcion: 'Acabado mate con herraje oculto y modulo alto.',
    material: 'MDF premium',
    medidas: '3.20 m',
    color: 'Negro grafito',
    rating: 5
  },
  {
    id: '3',
    nombre: 'Cocina Clasica Nogal',
    precio: 4800,
    imagen: 'nogal',
    tag: 'Nuevo',
    categoria: 'cocinas-integrales',
    descripcion: 'Textura madera, cajones amplios y cubierta clara.',
    material: 'Melamina',
    medidas: '2.10 m',
    color: 'Nogal natural',
    rating: 4.8
  },
  {
    id: '4',
    nombre: 'Cocina Compacta Studio',
    precio: 2900,
    imagen: 'studio',
    categoria: 'cocinas-integrales',
    descripcion: 'Solucion practica para apartamentos y espacios pequenos.',
    material: 'Melamina',
    medidas: '1.60 m',
    color: 'Gris calido',
    rating: 4.7
  },
  {
    id: '5',
    nombre: 'Ropero Blanco Brillante',
    precio: 3500,
    imagen: 'blanco',
    categoria: 'roperos',
    descripcion: 'Cuatro puertas, divisiones internas y acabado facil de limpiar.',
    material: 'MDF',
    medidas: '1.80 m',
    color: 'Blanco',
    rating: 4.8
  },
  {
    id: '6',
    nombre: 'Modulo Bajo Fregadero',
    precio: 1250,
    precioAnterior: 1490,
    imagen: 'fregadero',
    tag: 'Entrega rapida',
    categoria: 'accesorios',
    descripcion: 'Modulo listo para integrar con cubierta y lavatrastos.',
    material: 'Melamina RH',
    medidas: '0.90 m',
    color: 'Gris perla',
    rating: 4.6
  },
  {
    id: '7',
    nombre: 'Mueble de Bano Terra',
    precio: 2100,
    imagen: 'terra',
    categoria: 'muebles-bano',
    descripcion: 'Vanity suspendido con gaveta y textura madera.',
    material: 'Melamina RH',
    medidas: '0.80 m',
    color: 'Roble',
    rating: 4.7
  },
  {
    id: '8',
    nombre: 'Mesa Comedor Nativa',
    precio: 1800,
    imagen: 'nativa',
    categoria: 'mesas',
    descripcion: 'Mesa de comedor para seis personas con acabado resistente.',
    material: 'MDF',
    medidas: '1.60 m',
    color: 'Roble claro',
    rating: 4.9
  }
];

const categoriasDefault: Categoria[] = [
  { id: 'cocinas-integrales', nombre: 'Cocinas Integrales', icono: 'CI', cantidad: 24 },
  { id: 'closets', nombre: 'Closets', icono: 'CL', cantidad: 12 },
  { id: 'muebles-bano', nombre: 'Muebles de Bano', icono: 'MB', cantidad: 8 },
  { id: 'camas', nombre: 'Camas', icono: 'CA', cantidad: 15 },
  { id: 'roperos', nombre: 'Roperos', icono: 'RO', cantidad: 10 },
  { id: 'comodas', nombre: 'Comodas', icono: 'CO', cantidad: 6 },
  { id: 'mesas', nombre: 'Mesas', icono: 'ME', cantidad: 18 },
  { id: 'accesorios', nombre: 'Accesorios', icono: 'AC', cantidad: 42 }
];

const estadosFiltro = ['todos', 'cocinas-integrales', 'roperos', 'muebles-bano', 'mesas', 'accesorios'];
const paginasValidas: PaginaActiva[] = ['inicio', 'catalogo', 'contacto'];

const formatearPrecio = (precio: number) => `Q ${precio.toLocaleString('es-GT')}`;

const obtenerPaginaInicial = (): PaginaActiva => {
  if (typeof window === 'undefined') return 'inicio';
  const hash = window.location.hash.replace('#', '') as PaginaActiva;
  return paginasValidas.includes(hash) ? hash : 'inicio';
};

const PaginaInicio: React.FC<PaginaInicioProps> = ({
  productosDestacados = productosDefault.slice(0, 4),
  productosRecientes = productosDefault.slice(4, 8),
  categorias = categoriasDefault,
  onProductoClick,
  onCategoriaClick,
  onCarritoClick
}) => {
  const [paginaActiva, setPaginaActiva] = useState<PaginaActiva>(obtenerPaginaInicial);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [orden, setOrden] = useState('destacados');
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const todosProductos = useMemo(() => {
    const map = new Map<string, Producto>();
    [...productosDestacados, ...productosRecientes, ...productosDefault].forEach((producto) => {
      map.set(producto.id, producto);
    });
    return Array.from(map.values());
  }, [productosDestacados, productosRecientes]);

  const productosFiltrados = useMemo(() => {
    const filtrados = categoriaActiva === 'todos'
      ? todosProductos
      : todosProductos.filter((producto) => producto.categoria === categoriaActiva);

    return [...filtrados].sort((a, b) => {
      if (orden === 'precio-menor') return a.precio - b.precio;
      if (orden === 'precio-mayor') return b.precio - a.precio;
      if (orden === 'rating') return (b.rating ?? 0) - (a.rating ?? 0);
      return Number(Boolean(b.tag)) - Number(Boolean(a.tag));
    });
  }, [categoriaActiva, orden, todosProductos]);

  useEffect(() => {
    const actualizarDesdeHash = () => setPaginaActiva(obtenerPaginaInicial());
    window.addEventListener('hashchange', actualizarDesdeHash);
    return () => window.removeEventListener('hashchange', actualizarDesdeHash);
  }, []);

  const navegar = (pagina: PaginaActiva) => {
    setPaginaActiva(pagina);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${pagina}`);
    }
  };

  const abrirProducto = (producto: Producto) => {
    setProductoSeleccionado(producto);
    onProductoClick?.(producto);
  };

  const irCatalogo = (categoriaId = 'todos') => {
    setCategoriaActiva(categoriaId);
    navegar('catalogo');
  };

  const manejarCategoria = (categoria: Categoria) => {
    setCategoriaActiva(categoria.id);
    navegar('catalogo');
    onCategoriaClick?.(categoria);
  };

  const agregarAlCarrito = () => {
    if (!productoSeleccionado) return;
    setCarrito((actual) => [...actual, productoSeleccionado]);
    setProductoSeleccionado(null);
  };

  return (
    <div className="pagina-inicio">
      <BarraNavegacion
        paginaActiva={paginaActiva}
        onNavigate={navegar}
        onCarritoClick={onCarritoClick}
        totalCarrito={carrito.length}
      />

      {paginaActiva === 'inicio' && (
        <>
          <Hero onBotonClick={() => irCatalogo()} />
          <BarraConfianza />
          <SeccionCategorias
            categorias={categorias}
            onCategoriaClick={manejarCategoria}
            onVerTodoClick={() => irCatalogo()}
          />
          <Catalogo
            productos={productosDestacados}
            titulo="Productos Destacados"
            onProductoClick={abrirProducto}
            onVerTodoClick={() => irCatalogo()}
          />
          <section className="asesoria-banner">
            <div>
              <h2>Cotiza tu cocina con asesoria directa</h2>
              <p>Comparte medidas, estilo y presupuesto para recibir una propuesta clara del equipo de Cocinas Center.</p>
            </div>
            <button className="btn-primario" onClick={() => navegar('contacto')}>Solicitar asesoria</button>
          </section>
          <Catalogo
            productos={productosRecientes}
            titulo="Recien Llegados"
            onProductoClick={abrirProducto}
            onVerTodoClick={() => irCatalogo()}
          />
        </>
      )}

      {paginaActiva === 'catalogo' && (
        <main className="pagina-catalogo">
          <section className="catalogo-hero">
            <div>
              <h1>Catalogo Cocinas Center</h1>
              <p>Filtra por categoria, compara acabados y abre cada producto para iniciar una cotizacion.</p>
            </div>
            <div className="catalogo-resumen">
              <span>{productosFiltrados.length}</span>
              <small>productos disponibles</small>
            </div>
          </section>

          <section className="catalogo-layout">
            <aside className="catalogo-filtros">
              <h2>Categorias</h2>
              {estadosFiltro.map((categoriaId) => {
                const categoria = categorias.find((item) => item.id === categoriaId);
                const label = categoriaId === 'todos' ? 'Todo el catalogo' : categoria?.nombre ?? categoriaId;
                return (
                  <button
                    key={categoriaId}
                    className={categoriaActiva === categoriaId ? 'filtro-activo' : ''}
                    onClick={() => setCategoriaActiva(categoriaId)}
                  >
                    {label}
                  </button>
                );
              })}
            </aside>

            <div className="catalogo-contenido">
              <div className="catalogo-toolbar">
                <div>
                  <strong>{productosFiltrados.length} resultados</strong>
                  <span>Categoria: {categoriaActiva === 'todos' ? 'todas' : categorias.find((item) => item.id === categoriaActiva)?.nombre}</span>
                </div>
                <select value={orden} onChange={(event) => setOrden(event.target.value)}>
                  <option value="destacados">Destacados</option>
                  <option value="precio-menor">Precio menor</option>
                  <option value="precio-mayor">Precio mayor</option>
                  <option value="rating">Mejor calificados</option>
                </select>
              </div>

              <div className="productos-grid catalogo-grid">
                {productosFiltrados.map((producto) => (
                  <TarjetaProducto key={producto.id} producto={producto} onClick={() => abrirProducto(producto)} />
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {paginaActiva === 'contacto' && (
        <main className="pagina-contacto">
          <section className="contacto-card">
            <div>
              <h1>Hablemos de tu proximo proyecto</h1>
              <p>Envia tus medidas, estilo deseado y presupuesto. Te ayudamos a convertirlo en una cotizacion clara.</p>
              <div className="contacto-datos">
                <span>Guatemala</span>
                <span>ventas@cocinascenter.gt</span>
                <span>Atencion de lunes a sabado</span>
              </div>
            </div>
            <form className="contacto-form">
              <input placeholder="Nombre" />
              <input placeholder="Telefono" />
              <select defaultValue="">
                <option value="" disabled>Tipo de proyecto</option>
                <option>Cocina nueva</option>
                <option>Remodelacion</option>
                <option>Distribuidor</option>
              </select>
              <textarea placeholder="Cuéntanos medidas, color o idea principal" />
              <button className="btn-primario" type="button">Enviar solicitud</button>
            </form>
          </section>
        </main>
      )}

      {productoSeleccionado && (
        <div className="modal-backdrop" role="presentation" onClick={() => setProductoSeleccionado(null)}>
          <section className="modal-producto" role="dialog" aria-modal="true" aria-label={productoSeleccionado.nombre} onClick={(event) => event.stopPropagation()}>
            <TarjetaProducto producto={productoSeleccionado} />
            <div className="modal-detalle">
              <h2>{productoSeleccionado.nombre}</h2>
              <p>{productoSeleccionado.descripcion}</p>
              <dl>
                <div><dt>Material</dt><dd>{productoSeleccionado.material}</dd></div>
                <div><dt>Medida</dt><dd>{productoSeleccionado.medidas}</dd></div>
                <div><dt>Color</dt><dd>{productoSeleccionado.color}</dd></div>
              </dl>
              <strong>{formatearPrecio(productoSeleccionado.precio)}</strong>
              <button className="btn-primario" onClick={agregarAlCarrito}>Agregar al carrito</button>
              <button className="btn-secundario btn-cerrar" onClick={() => setProductoSeleccionado(null)}>Cerrar</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default PaginaInicio;
