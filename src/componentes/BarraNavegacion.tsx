import React from 'react';
import logoCocinasCenter from '../assets/logo-cocinas-center.svg';

export interface BarraNavegacionProps {
  onCarritoClick?: () => void;
  onLogoClick?: () => void;
}

const BarraNavegacion: React.FC<BarraNavegacionProps> = ({
  onCarritoClick,
  onLogoClick
}) => {
  return (
    <nav className="barra-navegacion">
      <div className="nav-container">
        <div className="nav-logo" onClick={onLogoClick}>
          <img
            className="logo-cocinas-center"
            src={logoCocinasCenter}
            alt="Cocinas Center"
          />
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link active">Inicio</a>
          <a href="#" className="nav-link">Catálogo</a>
       
          <a href="#" className="nav-link">Contacto</a>
        </div>

        <div className="nav-actions">
          <button className="nav-btn-carrito" onClick={onCarritoClick}>
            🛒 Carrito
          </button>
          <button className="nav-btn-login">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
