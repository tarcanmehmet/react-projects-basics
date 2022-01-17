import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(()=>{
    let slider = setInterval(() => {
      setActiveSlide( activeSlide + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [activeSlide]);
  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;
          let className = 'nextSlide';
          if(activeSlide === personIndex)
            className = 'activeSlide';
          if(personIndex === activeSlide - 1 || (activeSlide === 0 && personIndex === people.length -1 ))
            className = 'lastSlide';
          return(
          <article className={className} key={id}>
            <img src={image} className='person-img'/>
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>
              {quote}
            </p>
            <FaQuoteRight />
        </article>
          );
        })}
        
          <button className='prev'><FiChevronLeft /></button>
          <button className='next'><FiChevronRight /></button>
      </div>
    </section>
  );
}

export default App;
