import PropTypes from 'prop-types'
const Targeta = ({title,body,urlImg}) => {
  return (
    <div className="section">
      <div className="section-box">
        <img src={urlImg} alt="Imagen 1" className="section-image" />
        <div className="section-content">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
   );
}

Targeta.propTypes={
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired
}

export default Targeta;