import "../styles/nosInteresa.css"
const NosInteresa = () => {
  return ( 
    <div className="containerNosInteresa">
      <div className="containerNosInteresa_ofrecemos">
        <p className="containerNosInteresa_titulo">
          Ofrecemos
        </p>
        <ul className="containerNosInteresa_feature-list">
          <li>Seguridad en primer lugar</li>
          <li>Profesionalismo y cortesia</li>
          <li>Diversidad y empoderamiento</li>
          <li>Comodidad y confiabilidad</li>
          <li>Reserva facil</li>
        </ul>
      </div>
      <div className="containerNosInteresa_teInteresa">
        <p className="containerNosInteresa_teInteresa_titulo">
          Te interesa?
        </p>
        <p className="containerNosInteresa_teInteresa_subtitulo">
          Haznoslo saber
        </p>
      </div>
      <div className="containerNosInteresa_formulario">
        <p className="containerNosInteresa_formulario_texto">
          Suscribete para ser de los primeros en disfrutar de este renovador servicio 
        </p>
        <div className="containerNosInteresa_formulario_control">
          <div className="containerNosInteresa_formulario_form">
            <label htmlFor="nombre" className="containerNosInteresa_formulario_form_label">Nombre</label>
            <input id="nombre" type="text" placeholder="Maria Almendra Lopez" className="containerNosInteresa_formulario_form_input" />
          </div>
          <div className="containerNosInteresa_formulario_form">
            <label htmlFor="email" className="containerNosInteresa_formulario_form_label">Email</label>
            <input id="email" type="text" placeholder="interesado1@gmail.com" className="containerNosInteresa_formulario_form_input" />
          </div>
        </div>
        
        <div className="containerNosInteresa_formulario_mas">
          <p className="containerNosInteresa_formulario_form_text">
            Quiero saber mas
          </p>
          <p className="containerNosInteresa_formulario_form_cuando">
            Cuando podre verlo?
          </p>
        </div>
        <button className="containerNosInteresa_formulario_btn">
          Me interesa
        </button>

        <div className="containerNosInteresa_formulario_text-container">
          <span className="containerNosInteresa_formulario_text-container-text">O continua con</span>
        </div>

        <div className="containerNosInteresa_formulario_google">
          <img src="logoGoogle.png" alt="logo google" />
        </div>
        
      </div>
    </div>
   );
}
 
export default NosInteresa;