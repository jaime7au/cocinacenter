import React from 'react';

const BarraConfianza: React.FC = () => {
  const beneficios = [
    { icono: '01', texto: 'Envio en Guatemala' },
    { icono: '02', texto: 'Garantia de 2 anos' },
    { icono: '03', texto: 'Pagos seguros' },
    { icono: '04', texto: 'Instalacion disponible' },
    { icono: '05', texto: 'Calidad premium' }
  ];

  return (
    <div className="barra-confianza">
      {beneficios.map((beneficio) => (
        <div key={beneficio.texto} className="beneficio">
          <span className="beneficio-icono">{beneficio.icono}</span>
          <span className="beneficio-texto">{beneficio.texto}</span>
        </div>
      ))}
    </div>
  );
};

export default BarraConfianza;
