import React from 'react';
import logoCocinasCenter from '../assets/logo-cocinas-center.svg';

export type PaginaActiva = 'inicio' | 'catalogo' | 'contacto';

export interface BarraNavegacionProps {
  onCarritoClick?: () => void;
  onLogoClick?: () => void;
  paginaActiva?: PaginaActiva;
  onNavigate?: (pagina: PaginaActiva) => void;
  totalCarrito?: number;
}

const enlaces: Array<{ id: PaginaActiva; label: string }> = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'catalogo', label: 'Catalogo' },
  { id: 'contacto', label: 'Contacto' }
];

const BarraNavegacion: React.FC<BarraNavegacionProps> = ({
  onCarritoClick,
  onLogoClick,
  paginaActiva = 'inicio',
  onNavigate,
  totalCarrito = 0
}) => {
  const navegar = (pagina: PaginaActiva) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate?.(pagina);
  };

  const logoClick = () => {
    onLogoClick?.();
    onNavigate?.('inicio');
  };

  return (
    <nav className="barra-navegacion">
      <div className="nav-container">
        <button className="nav-logo" onClick={logoClick} aria-label="Ir al inicio">
          <img className="logo-cocinas-center" src={logoCocinasCenter} alt="Cocinas Center" />
        </button>

        <div className="nav-links" aria-label="Navegacion principal">
          {enlaces.map((enlace) => (
            <a
              key={enlace.id}
              href={`#${enlace.id}`}
              onClick={navegar(enlace.id)}
              className={`nav-link ${paginaActiva === enlace.id ? 'active' : ''}`}
            >
              {enlace.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="nav-btn-carrito" onClick={onCarritoClick}>
            Carrito {totalCarrito > 0 && <span>{totalCarrito}</span>}
          </button>
          <button className="nav-btn-login">Iniciar sesion</button>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
