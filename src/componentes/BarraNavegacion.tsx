import React from 'react';
import logoCocinasCenter from '../assets/logo-cocinas-center.svg';

export type PaginaActiva = 'inicio' | 'catalogo' | 'contacto';

export interface BarraNavegacionProps {
  onLogoClick?: () => void;
  paginaActiva?: PaginaActiva;
  onNavigate?: (pagina: PaginaActiva) => void;
}

const enlaces: Array<{ id: PaginaActiva; label: string }> = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'catalogo', label: 'Catalogo' },
  { id: 'contacto', label: 'Contacto' }
];

const BarraNavegacion: React.FC<BarraNavegacionProps> = ({
  onLogoClick,
  paginaActiva = 'inicio',
  onNavigate
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

        <a className="nav-whatsapp" href="#contacto" onClick={navegar('contacto')}>
          Cotizar por WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
