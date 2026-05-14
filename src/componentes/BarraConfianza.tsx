import React from 'react';

const BarraConfianza: React.FC = () => {
  const beneficios = [
    { icono: '🚚', texto: 'Envío Gratis' },
    { icono: '🛡️', texto: 'Garantía de 2 Años' },
    { icono: '💳', texto: 'Pagos Seguros' },
    { icono: '📦', texto: 'Assembly Incluido' },
    { icono: '⭐', texto: 'Calidad Premium' }
  ];

  return (
    <div className="barra-confianza">
      {beneficios.map((beneficio, index) => (
        <div key={index} className="beneficio">
          <span className="beneficio-icono">{beneficio.icono}</span>
          <span className="beneficio-texto">{beneficio.texto}</span>
        </div>
      ))}
    </div>
  );
};

export default BarraConfianza;
