import "../styles/slidermain.css"
const SliderMain = () => {
  return (
    <div className="slider-container">
      <h1 className="slider-title">TranquiTaxi</h1>
      <div className="section-container">
        <div className="section">
          <div className="section-box">
            <img src="pngwing 3.png" alt="Imagen 1" className="section-image" />
            <div className="section-content">
              <h2>Seguridad en primer lugar</h2>
              <p>Nuestras conductoras son rigurosamente seleccionadas y capacitadas para garantizar tu seguridad en cada viaje</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-box">
            <img src="pngegg 1.png" alt="Imagen 2" className="section-image" />
            <div className="section-content">
              <h2>Profesionalismo y cortesía</h2>
              <p>Nuestro equipo de conductoras se distingue por su profesionalismo, amabilidad y respeto hacia nuestros pasajeros.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-box">
            <img src="pngwing 4.png" alt="Imagen 3" className="section-image" />
            <div className="section-content">
              <h2>Diversidad y empoderamiento</h2>
              <p>Nos enorgullece promover la inclusión y la igualdad de oportunidades al ofrecer empleo a mujeres talentosas y dedicadas en el campo del transporte.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-box">
            <img src="pngwing 1.png" alt="Imagen 4" className="section-image" />
            <div className="section-content">
              <h2>Comodidad y confiabilidad</h2>
              <p>Nuestra flota de vehículos está bien mantenida y equipada con las comodidades necesarias para brindarle un viaje agradable y confiable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SliderMain;