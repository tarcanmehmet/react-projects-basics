import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    count: 0,
    loading: false,
    cart: [],
    total: 0,
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () =>{
    dispatch({type: 'LOADING'});
    const response = await fetch(url);
    const data = await response.json();
    dispatch({type: 'FETCH_DATA', payload: data});
    dispatch({type: 'LOADING'});
    dispatch({type: 'TOTAL'});
  };
  const handleClearItem = () => {
    dispatch({type:'CLEAR_CART'});
  }
  const handleRemoveItem = (id) =>{
    dispatch({type:'REMOVE_ITEM', payload: id});
    dispatch({type: 'TOTAL'});
  }

  const handleAmountChange = (type, id) => {
    dispatch({type: type, payload: id});
    dispatch({type: 'TOTAL'});
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <AppContext.Provider
      value={{
       ...state, handleClearItem, handleRemoveItem, handleAmountChange
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
