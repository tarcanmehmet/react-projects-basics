import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [collapseCheck, setCollapseCheck] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>setCollapseCheck(!collapseCheck)}>{collapseCheck ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {collapseCheck && <p>{info}</p>}
    </article>
  );
};

export default Question;
