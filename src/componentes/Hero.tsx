import React from 'react';

export interface HeroProps {
  titulo?: string;
  subtitulo?: string;
  textoBoton?: string;
  onBotonClick?: () => void;
  imagenSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  titulo = 'Cocinas que transforman tu hogar',
  subtitulo = 'Disenos modernos, funcionales y fabricados a la medida para vender, cotizar o renovar con confianza.',
  textoBoton = 'Ver catalogo',
  onBotonClick,
  imagenSrc
}) => {
  return (
    <section className="hero">
      <div className="hero-contenido">
        <h1 className="hero-titulo">
          {titulo.split(' ').map((palabra, i) => (
            palabra.toLowerCase() === 'cocinas' ? <em key={i}>{palabra} </em> : <span key={i}>{palabra} </span>
          ))}
        </h1>
        <p className="hero-descripcion">{subtitulo}</p>

        <div className="hero-botones">
          <button className="btn-primario" onClick={onBotonClick}>{textoBoton}</button>
          <button className="btn-secundario" onClick={onBotonClick}>Cotizar ahora</button>
        </div>

        <div className="hero-estadisticas">
          <div className="estadistica">
            <span className="estadistica-valor">500+</span>
            <span className="estadistica-etiqueta">Clientes felices</span>
          </div>
          <div className="estadistica">
            <span className="estadistica-valor">50+</span>
            <span className="estadistica-etiqueta">Disenos unicos</span>
          </div>
          <div className="estadistica">
            <span className="estadistica-valor">5.0</span>
            <span className="estadistica-etiqueta">Calificacion</span>
          </div>
        </div>
      </div>

      <div className="hero-imagen">
        {imagenSrc ? (
          <img src={imagenSrc} alt="Cocina" />
        ) : (
          <div className="hero-cocina-render" aria-hidden="true">
            <div className="hero-wall"></div>
            <div className="hero-cabinet hero-cabinet-a"></div>
            <div className="hero-cabinet hero-cabinet-b"></div>
            <div className="hero-cabinet hero-cabinet-c"></div>
            <div className="hero-counter"></div>
            <div className="hero-base hero-base-a"></div>
            <div className="hero-base hero-base-b"></div>
            <div className="hero-base hero-base-c"></div>
            <div className="hero-sink"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
