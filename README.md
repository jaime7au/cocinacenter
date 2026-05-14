# Módulo @cocinascenter/inicio

Módulo React para la página de inicio y catálogo de Cocinas Center.

## 📋 Descripción

Este módulo contiene la página principal de la plataforma pública de Cocinas Center, incluyendo:

- **Página de Inicio**: Componente principal que ensambla toda la página
- **Catálogo de Productos**: Grid de productos con tarjetas interactivas
- **Sección de Categorías**: Navegación por categorías de productos
- **Hero Section**: Banner principal con CTA (Call To Action)
- **Barra de Navegación**: Menú principal y acceso rápido
- **Barra de Confianza**: Beneficios y ventajas del cliente

## 🎯 Características

- ✅ Componentes reutilizables y tipados con TypeScript
- ✅ Estilos CSS modularizados con variables de tema
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Stories de Storybook para cada componente
- ✅ Totalmente personalizable vía props

## 📦 Instalación

```bash
npm install @cocinascenter/inicio
```

## 🚀 Uso

### Uso básico

```tsx
import { PaginaInicio } from '@cocinascenter/inicio';
import '@cocinascenter/inicio/styles.css';

export default function App() {
  return <PaginaInicio />;
}
```

### Uso avanzado con datos personalizados

```tsx
import { PaginaInicio, Producto, Categoria } from '@cocinascenter/inicio';
import '@cocinascenter/inicio/styles.css';

const productos: Producto[] = [
  {
    id: '1',
    nombre: 'Cocina Premium',
    precio: 15000,
    precioAnterior: 18000,
    imagen: 'url-a-imagen',
    tag: 'Oferta',
    categoria: 'cocinas-integrales'
  }
  // ... más productos
];

const categorias: Categoria[] = [
  {
    id: 'cocinas-integrales',
    nombre: 'Cocinas Integrales',
    icono: '🍳',
    cantidad: 24
  }
  // ... más categorías
];

export default function App() {
  return (
    <PaginaInicio
      productosDestacados={productos}
      categorias={categorias}
      onProductoClick={(producto) => console.log(producto)}
      onCategoriaClick={(categoria) => console.log(categoria)}
    />
  );
}
```

## 📦 Componentes disponibles

### PaginaInicio
Componente principal que agrupa toda la página.

**Props:**
```typescript
interface PaginaInicioProps {
  productosDestacados?: Producto[];
  productosRecientes?: Producto[];
  categorias?: Categoria[];
  onProductoClick?: (producto: Producto) => void;
  onCategoriaClick?: (categoria: Categoria) => void;
  onCarritoClick?: () => void;
}
```

### Catalogo
Grid de productos con título.

**Props:**
```typescript
interface CatalogoProps {
  productos: Producto[];
  titulo: string;
  onProductoClick?: (producto: Producto) => void;
  mostrarVerTodo?: boolean;
}
```

### TarjetaProducto
Tarjeta individual de producto.

**Props:**
```typescript
interface TarjetaProductoProps {
  producto: Producto;
  onClick?: () => void;
}
```

### SeccionCategorias
Sección con grid de categorías.

**Props:**
```typescript
interface SeccionCategoriasProps {
  categorias: Categoria[];
  onCategoriaClick?: (categoria: Categoria) => void;
}
```

### Hero
Banner principal con CTA.

**Props:**
```typescript
interface HeroProps {
  titulo?: string;
  subtitulo?: string;
  textoBoton?: string;
  onBotonClick?: () => void;
  imagenSrc?: string;
}
```

### BarraNavegacion
Menú principal.

**Props:**
```typescript
interface BarraNavegacionProps {
  onCarritoClick?: () => void;
  onLogoClick?: () => void;
}
```

### BarraConfianza
Beneficios y ventajas.

Sin props personalizables (componente presentacional).

## 🎨 Personalización de estilos

Los estilos utilizan variables CSS que pueden ser sobrescritas:

```css
:root {
  --color-primary: #1a2a47;
  --color-accent: #f5a623;
  --color-text: #555555;
  /* ... más variables */
}
```

## 📚 Development

### Scripts disponibles

```bash
# Build para producción
npm run build

# Watch mode durante desarrollo
npm run dev

# Ver preview del build
npm run preview

# Ejecutar Storybook
npm run storybook

# Build de Storybook
npm run build-storybook

# Validar tipos
npm run type-check

# Lint de código
npm run lint
```

### Estructura de archivos

```
src/
├── componentes/
│   ├── BarraConfianza.tsx
│   ├── BarraNavegacion.tsx
│   ├── Catalogo.tsx
│   ├── Hero.tsx
│   ├── SeccionCategorias.tsx
│   ├── TarjetaProducto.tsx
│   └── *.stories.tsx
├── PaginaInicio.tsx
├── PaginaInicio.stories.tsx
├── styles.css
└── index.ts
```

## 🔗 Tipos

```typescript
interface Producto {
  id: string;
  nombre: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  tag?: string;
  categoria: string;
}

interface Categoria {
  id: string;
  nombre: string;
  icono: string;
  cantidad: number;
}
```

## 🤝 Contribuir

Para desarrollar este módulo:

```bash
# Instalar dependencias
npm install

# Ver cambios en tiempo real
npm run dev

# Storybook para UI
npm run storybook
```

## 📝 Licencia

Todos los derechos reservados © Cocinas Center 2024
