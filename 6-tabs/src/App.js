import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  }, []);
  if(loading)
  return <div className='section loading'>Loading</div>;
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => <button key={item.id} className={`job-btn ${index === value ? 'active-btn' : 'false'}`} onClick={()=>setValue(index)}>{item.company}</button>)}
        </div>
        <article class="job-info">
          <h3>{jobs[value].title}</h3>
          <h4>{jobs[value].company}</h4>
          <p class="job-date">{jobs[value].dates}</p>
            {jobs[value].duties.map((duty, index)=>{
              return(
                <div key={index} class="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
            
        </article>
      </div>
      <button className='btn'>more info</button>
    </section>
  );
}

export default App
