import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url, id }) => {

  return (
    <div className="card" >
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

/*
 * 1. Añadir PropTypes  
 * a. title obligatorio
 * b. url obligatorio
 * 
 * 2. Evaluar el snapshot
 * 
 */

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}