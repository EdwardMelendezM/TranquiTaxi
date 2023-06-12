import "../styles/slidermain.css"
import Targeta from "./Targeta";
const listTargetas = [
  {
    title:'Seguridad en primer lugar',
    body:'Nuestras conductoras son rigurosamente seleccionadas y capacitadas para garantizar tu seguridad en cada viaje',
    urlImg:'pngwing 3.png'
  },
  {
    title: 'Profesionalismo y cortesía',
    body: 'Nuestro equipo de conductoras se distingue por su profesionalismo, amabilidad y respeto hacia nuestros pasajeros.',
    urlImg: 'pngegg 1.png'
  },
  {
    title: 'Diversidad y empoderamiento',
    body: 'Nos enorgullece promover la inclusión y la igualdad de oportunidades al ofrecer empleo a mujeres talentosas y dedicadas en el campo del transporte',
    urlImg: 'pngwing 4.png'
  },
  {
    title: 'Comodidad y confiabilidad',
    body: 'Nuestra flota de vehículos está bien mantenida y equipada con las comodidades necesarias para brindarle un viaje agradable y confiable',
    urlImg: 'pngwing 1.png'
  }
]
const SliderMain = () => {
  return (
    <div className="slider-container">
      <div className="slider-container-main">
        <h1 className="slider-title">TrankiTaxi</h1>
        <img src="trankitaxi.png" alt="tranqui taxi logo" className="slider-container-logo"/>
      </div>
      <div className="section-container">
        {
          listTargetas.map(item => {
            return <Targeta
              key={crypto.randomUUID()}
              title={item.title}
              body={item.body}
              urlImg={item.urlImg}
            />
          })
        }
        
        
        
      </div>
    </div>
  );
}
 
export default SliderMain;