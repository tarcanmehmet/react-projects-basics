import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [selectedPerson, setSelectedPerson] = useState(1);
  const negativeCheck = () => {
    if(selectedPerson - 1 === 0){
      return 4;
    }
    else
      return selectedPerson-1;
  }
  const randomReview = () => {
    let temp = Math.floor((Math.random() * 3) + 1); 
    while(temp === selectedPerson){
      temp = Math.floor((Math.random() * 3) + 1); 
    }
    return temp;
  }
  return (
      <>    
        {people.filter((selectedReview) => selectedReview.id === selectedPerson)
        .map(person => {
          return(
            <div key={person.id}>
            <div className="img-container">
              <img src={person.image} alt="" className="person-img"/>
              <span className="quote-icon">
                <FaQuoteRight />
            </span>
            </div>
            <h4 className="author">{person.name}</h4>
            <p className="job">{person.job}</p>
            <p className="info">{person.text}</p>
            </div>
          )
        })
        }
        <div className="button-container">
          <button onClick={() => setSelectedPerson(negativeCheck())} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={() => setSelectedPerson((selectedPerson % 4) + 1)} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={() => setSelectedPerson(randomReview())}>surprise me</button>
      </>
  );
};

export default Review;
