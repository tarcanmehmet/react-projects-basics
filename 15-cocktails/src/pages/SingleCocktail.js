import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [singleCocktail, setSingleCocktail] = useState();
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const fetchSingleCocktail = async ()=> {
    setLoading(true);
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    const {strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = data.drinks[0];
    const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
    const newCokctail = {strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions, ingredients};
    setSingleCocktail(newCokctail);
    setLoading(false);
  }
  useEffect(()=>{
    fetchSingleCocktail();
  }, []);
  return (
    loading ? <Loading /> : 
    <section className="section cocktail-section">
      <Link to="/" className='btn btn-primary'>back home</Link>
      <h2 className="section-title">{singleCocktail.strDrink}</h2>
      <div className="drink">
        <img src={singleCocktail.strDrinkThumb} alt={singleCocktail.strDrink} />
          <div className="drink-info">
            <p><span className="drink-data">name :</span> {singleCocktail.strDrink}</p>
            <p><span className="drink-data">category :</span> {singleCocktail.strCategory}</p>
            <p><span className="drink-data">info :</span> {singleCocktail.strAlcoholic}</p>
            <p><span className="drink-data">glass :</span> {singleCocktail.strGlass}</p>
            <p><span className="drink-data">instructons :</span> {singleCocktail.strInstructions}</p>
            <p><span className="drink-data">ingredients :</span>
              {singleCocktail.ingredients.map(ingredient => <span>{ingredient} </span>)}
            </p>
          </div>
       </div>
    </section>
  )
}

export default SingleCocktail
