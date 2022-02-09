import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading, cocktails, noCocktail} = useGlobalContext();
  return(
    loading ? <Loading /> :
        noCocktail ? <h2 className='section-title'>no cokctail matched your search criteria</h2> :
        <section className='section'>
        <h2 className='section-title'>cocktails</h2>
        <div className='cocktails-center'>
          {cocktails.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail} />)}
        </div>
      </section>
  )
}

export default CocktailList
