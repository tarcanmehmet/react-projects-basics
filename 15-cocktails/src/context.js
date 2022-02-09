import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [noCocktail, setNoCocktail] = useState(false);
  const fetchData = async ()=>{
    setLoading(true);
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();
    if(data.drinks != null){
      setCocktails(data.drinks);
      setNoCocktail(false);
    }
    else{
      setCocktails([]);
      setNoCocktail(true);
    }
    setLoading(false);
  }
  const handleTermChange = (val) => {
    setSearchTerm(val);
  }
  useEffect(()=>{
    fetchData();
  },[searchTerm])
  return <AppContext.Provider value={{loading, cocktails, searchTerm, handleTermChange, noCocktail}}>
    {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
