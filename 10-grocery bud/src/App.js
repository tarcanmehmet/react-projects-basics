import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [itemList, setItemList] = useState([]); 
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e)=> {
    e.preventDefault();
    setItemList([...itemList, inputValue]);
    setInputValue('');
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <p className='alert alert-success'>ret</p>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g. eggs' onChange={(e)=> setInputValue(e.target.value)} value={inputValue}></input>
          <button type='submit' className='submit-btn'>submit</button>
        </div>
      </form>
      <List itemList={itemList} />
      
    </section>
  );
}

export default App
 