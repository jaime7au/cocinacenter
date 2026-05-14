import React from 'react';

export interface HeroProps {
  titulo?: string;
  subtitulo?: string;
  textoBoton?: string;
  onBotonClick?: () => void;
  imagenSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  titulo = "Cocinas que Transforman tu Hogar",
  subtitulo = "Diseños modernos y funcionales para la cocina de tus sueños. Calidad, estilo y precio justo.",
  textoBoton = "Ver Catálogo",
  onBotonClick,
  imagenSrc
}) => {
  return (
    <section className="hero">
      <div className="hero-contenido">
        <div className="hero-badge">✨ Nuevas Colecciones 2026</div>
        <h1 className="hero-titulo">
          {titulo.split(' ').map((palabra, i) => (
            palabra === 'Cocinas' ? <em key={i}>{palabra} </em> : <span key={i}>{palabra} </span>
          ))}
        </h1>
        <p className="hero-descripcion">{subtitulo}</p>

        <div className="hero-botones">
          <button className="btn-primario" onClick={onBotonClick}>
            {textoBoton}
          </button>
                  </div>

        <div className="hero-estadisticas">
          <div className="estadistica">
            <span className="estadistica-valor">500+</span>
            <span className="estadistica-etiqueta">Clientes felices</span>
          </div>
          <div className="estadistica">
            <span className="estadistica-valor">50+</span>
            <span className="estadistica-etiqueta">Diseños únicos</span>
          </div>
          <div className="estadistica">
            <span className="estadistica-valor">5★</span>
            <span className="estadistica-etiqueta">Calificación</span>
          </div>
        </div>
      </div>

      <div className="hero-imagen">
        {imagenSrc ? (
          <img src={imagenSrc} alt="Cocina" />
        ) : (
          <div className="hero-imagen-placeholder">
            <span>🍳</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
