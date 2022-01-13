import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  return (
    <main>
      <section className='container'>
        <h3>questions and answers about login</h3>
        <article className='info'>
          {data.map((question)=> <SingleQuestion key={question.id} {...question} />)}
        </article>
      </section>
    </main>
  );
  }
export default App;
