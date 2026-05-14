// EJEMPLO - Aplicación usando @cocinascenter/inicio
// Este archivo muestra cómo usar el módulo en un proyecto React real

import React, { useState } from 'react';
import {
  PaginaInicio,
  Producto,
  Categoria
} from '@cocinascenter/inicio';
import '@cocinascenter/inicio/dist/style.css';

// Datos de ejemplo extendidos
const PRODUCTOS_EJEMPLO: Producto[] = [
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
    nombre: 'Cocina Negra Sofisticada 8 Pzas',
    precio: 4800,
    precioAnterior: 5500,
    imagen: 'negra8',
    tag: 'Popular',
    categoria: 'cocinas-integrales'
  }
];

const CATEGORIAS_EJEMPLO: Categoria[] = [
  { id: 'cocinas-integrales', nombre: 'Cocinas Integrales', icono: '🍳', cantidad: 24 },
  { id: 'closets', nombre: 'Closets', icono: '🚪', cantidad: 12 },
  { id: 'muebles-bano', nombre: 'Muebles de Baño', icono: '🚿', cantidad: 8 },
  { id: 'camas', nombre: 'Camas', icono: '🛏️', cantidad: 15 },
  { id: 'roperos', nombre: 'Roperos', icono: '👔', cantidad: 10 },
  { id: 'comodas', nombre: 'Cómodas', icono: '🗄️', cantidad: 6 },
  { id: 'mesas', nombre: 'Mesas', icono: '🪑', cantidad: 18 },
  { id: 'accesorios', nombre: 'Accesorios', icono: '🔧', cantidad: 42 }
];

/**
 * Ejemplo básico - Usar el módulo sin personalización
 */
export function EjemploBasico() {
  return <PaginaInicio />;
}

/**
 * Ejemplo completo - Con todos los handlers y datos personalizados
 */
export function EjemploCompleto() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null);

  const handleProductoClick = (producto: Producto) => {
    setProductoSeleccionado(producto);
    console.log('✅ Producto seleccionado:', producto.nombre);
    
    // Aquí irían acciones como:
    // - Navegar a página de detalle
    // - Mostrar modal
    // - Agregar al carrito
  };

  const handleCategoriaClick = (categoria: Categoria) => {
    setCategoriaSeleccionada(categoria);
    console.log('✅ Categoría seleccionada:', categoria.nombre);
    
    // Aquí irían acciones como:
    // - Filtrar productos por categoría
    // - Navegar a categoría
    // - Aplicar filtros
  };

  const handleCarritoClick = () => {
    console.log('🛒 Carrito clickeado');
    console.log('Items en carrito:', carrito.length);
    
    // Aquí irían acciones como:
    // - Navegar a página de carrito
    // - Mostrar sidebar del carrito
    // - Mostrar modal de carrito
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <PaginaInicio
        productosDestacados={PRODUCTOS_EJEMPLO.slice(0, 6)}
        productosRecientes={PRODUCTOS_EJEMPLO.slice(3, 6)}
        categorias={CATEGORIAS_EJEMPLO}
        onProductoClick={handleProductoClick}
        onCategoriaClick={handleCategoriaClick}
        onCarritoClick={handleCarritoClick}
      />

      {/* Panel de información (solo para demo) */}
      <div style={{
        padding: '20px',
        backgroundColor: '#f6f8fc',
        borderTop: '1px solid #eee',
        marginTop: '20px'
      }}>
        <h3>Estado de la Aplicación (Demo)</h3>
        
        {productoSeleccionado && (
          <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <strong>Producto seleccionado:</strong> {productoSeleccionado.nombre}
          </div>
        )}
        
        {categoriaSeleccionada && (
          <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <strong>Categoría seleccionada:</strong> {categoriaSeleccionada.nombre}
          </div>
        )}
        
        <div style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
          <strong>Items en carrito:</strong> {carrito.length}
        </div>
      </div>
    </div>
  );
}

/**
 * Ejemplo avanzado - Con integración de API y estado global
 */
export function EjemploAvanzado() {
  const [productos, setProductos] = useState<Producto[]>(PRODUCTOS_EJEMPLO);
  const [categorias, setCategorias] = useState<Categoria[]>(CATEGORIAS_EJEMPLO);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simular llamada a API
  const fetchProductos = async () => {
    setCargando(true);
    setError(null);
    try {
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // En un caso real, aquí iría:
      // const response = await fetch('/api/productos');
      // const data = await response.json();
      // setProductos(data);
      
      console.log('✅ Productos cargados desde API');
    } catch (err) {
      setError('Error al cargar productos');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const handleProductoClick = (producto: Producto) => {
    console.log('📦 Agregar al carrito:', producto.nombre);
    
    // Aquí iría la lógica de agregar al carrito:
    // - Llamar a API
    // - Actualizar estado global
    // - Mostrar notificación
  };

  const handleCategoriaClick = (categoria: Categoria) => {
    console.log('🏷️ Filtrar por categoría:', categoria.nombre);
    
    // Aquí iría la lógica de filtrado:
    // const productosFiltrados = productos.filter(p => p.categoria === categoria.id);
    // setProductos(productosFiltrados);
  };

  return (
    <div>
      {cargando && <div>Cargando...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      <PaginaInicio
        productosDestacados={productos}
        categorias={categorias}
        onProductoClick={handleProductoClick}
        onCategoriaClick={handleCategoriaClick}
      />
    </div>
  );
}

/**
 * Aplicación principal - Ejemplo completo
 */
export default function App() {
  const [vista, setVista] = useState<'basico' | 'completo' | 'avanzado'>('completo');

  return (
    <div>
      {/* Controles (solo para demo) */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#1a2a47',
        padding: '10px 15px',
        borderRadius: '0 0 0 5px'
      }}>
        <button
          onClick={() => setVista('basico')}
          style={{
            padding: '5px 10px',
            marginRight: '5px',
            backgroundColor: vista === 'basico' ? '#f5a623' : '#fff',
            color: vista === 'basico' ? '#1a2a47' : '#1a2a47',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Básico
        </button>
        <button
          onClick={() => setVista('completo')}
          style={{
            padding: '5px 10px',
            marginRight: '5px',
            backgroundColor: vista === 'completo' ? '#f5a623' : '#fff',
            color: vista === 'completo' ? '#1a2a47' : '#1a2a47',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Completo
        </button>
        <button
          onClick={() => setVista('avanzado')}
          style={{
            padding: '5px 10px',
            backgroundColor: vista === 'avanzado' ? '#f5a623' : '#fff',
            color: vista === 'avanzado' ? '#1a2a47' : '#1a2a47',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Avanzado
        </button>
      </div>

      {/* Contenido */}
      {vista === 'basico' && <EjemploBasico />}
      {vista === 'completo' && <EjemploCompleto />}
      {vista === 'avanzado' && <EjemploAvanzado />}
    </div>
  );
}

// NOTAS DE INTEGRACIÓN:
//
// 1. Para usar en un proyecto real:
//    npm install @cocinascenter/inicio
//
// 2. Importar componentes:
//    import { PaginaInicio } from '@cocinascenter/inicio';
//
// 3. Importar estilos:
//    import '@cocinascenter/inicio/dist/style.css';
//
// 4. Tipos disponibles:
//    - Producto
//    - Categoria
//    - PaginaInicioProps
//    - CatalogoProps
//    - Y más...
//
// 5. Handlers recomendados:
//    - onProductoClick: Agregar al carrito, ir a detalle
//    - onCategoriaClick: Filtrar, navegar
//    - onCarritoClick: Mostrar carrito, navegar
//
// 6. Personalización:
//    - Props para datos
//    - CSS variables para colores
//    - CSS custom para otros estilos
//
// 7. Testing:
//    - Snapshots de componentes
//    - Unit tests de handlers
//    - E2E tests de flujos
