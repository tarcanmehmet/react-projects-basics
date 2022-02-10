import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchTerm, handleTermChange} = useGlobalContext();
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor="name">search your favorite cocktail</label>
          <input type='text' name='name' id='name' value={searchTerm} onChange={(e)=> handleTermChange(e.target.value)}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
