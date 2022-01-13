import React, {useState} from 'react';

const List = ({data}) => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map(person => {
        return(
          <div key={person.id} className="person">
            <img src={person.image} alt={`person_${person.id}_image`} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
         </div>
        )
      })}
      <button onClick={()=> setPeople([])}>Clear All</button>
    </>
  );
};

export default List;
