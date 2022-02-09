import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({cocktail}) => {
  const{idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb} = cocktail;
  return (
    <article className="cocktail">
        <div className="img-container">
          <img src={strDrinkThumb} alt={`img-${strDrink}`} />
        </div>
        <div className="cocktail-footer">
          <h3>{strDrink}</h3>
          <h4>{strGlass}</h4>
          <p>{strAlcoholic}</p>
          <a className="btn btn-primary btn-details" href="">details</a>
        </div>
    </article>
  )
}

export default Cocktail
