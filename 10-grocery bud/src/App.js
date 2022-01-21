import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [itemList, setItemList] = useState([]); 
  const [inputValue, setInputValue] = useState('');
  const [actType, setActType] = useState({showAlert: false, msg: '', type:''});
  const [isEdit, setIsEdit] = useState(false);
  const [editedIndex, setEditedIndex] = useState(0);
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(isEdit){
      const newArray = itemList;
      newArray[editedIndex] = inputValue;
      setItemList(newArray); 
      setActType({showAlert:true, msg:'Your Item is Edited', type:'success'});
    }
    else{
      setItemList([...itemList, inputValue]);
      setActType({showAlert:true, msg:'Your Item is Added', type:'success'});
    }
    setInputValue('');
    setIsEdit(false);
  }
  const handleDelete = (index) => {
    setItemList(itemList.filter((item,listIndex) => index!=listIndex));
    setActType({showAlert:true, msg:'Your Item is Deleted', type:'danger'});

  }
  const handleEdit = (index) => {
    setInputValue(itemList[index]);
    setIsEdit(true);
    setEditedIndex(index);
  }
  const handleClearItems = () =>{
    setItemList([]);
    setInputValue('');
    setIsEdit(false);
  }
  useEffect(() =>{
    const timeout = setTimeout(()=>{
      setActType({showAlert:false, msg:'', type:''});
    }, 3000);
    return () => clearTimeout(timeout);
  }, [actType])
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>

        {actType.showAlert && <Alert {...actType}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g. eggs' onChange={(e)=> setInputValue(e.target.value)} value={inputValue}></input>
          {isEdit ? <button type='submit' className='submit-btn'>edit</button> : <button type='submit' className='submit-btn'>submit</button>}
        </div>
      </form>
      <List itemList={itemList} handleDelete={handleDelete} handleEdit={handleEdit} handleClearItems={handleClearItems}/>
    </section>
  );
}

export default App
 