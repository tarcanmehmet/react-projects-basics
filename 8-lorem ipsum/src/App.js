import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphs(data.slice(0, numberOfParagraphs));
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label for="amount">paragraphs:</label>
        <input type='number' name='amount' id="amount" value={numberOfParagraphs} onChange={(e) => setNumberOfParagraphs(e.target.value)}></input>
        <button className='btn' onClick="">generate</button>
      </form>
      <article className='lorem-text'>
        {paragraphs.map((paragraph,index) => <p key={index}>{paragraph}</p>)}
      </article>
    </section>
  );
}
export default App;