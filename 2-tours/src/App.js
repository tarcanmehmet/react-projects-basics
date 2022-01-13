import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
  }
  const removeTour = (id) => {
    const updatedTours = tours.filter(tour => id !== tour.id );
    setTours(updatedTours);
  }
  useEffect(()=>{
    fetchTours();
  },[]);
  return (
  <main>
    {loading ? (
      <Loading />
    ) 
    : 
    (
      tours.length ? (
      <section>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <Tours tours={tours} removeTour={removeTour}/>
      </section>) 
      : 
      (
        <section>
          <div className='title'>
            <h2>No Tours Left</h2>
            <button onClick={fetchTours} class="btn">Refresh</button>
          </div>
        </section>
      )
    )}
  </main>
  );
}

export default App
