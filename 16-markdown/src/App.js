import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdownValue, setMarkdownValue] = useState('# markdown preview');
  const handleTextAreaChange = (value) => {
    setMarkdownValue(value);
  }
  return (
    <main>
      <section className='markdown'>
        <textarea className='input' value={markdownValue} onChange={(e)=> handleTextAreaChange(e.target.value)}></textarea>
      <article className='result'>
        <ReactMarkdown>{markdownValue}</ReactMarkdown>
      </article>
      </section>
    </main>
  );
}

export default App
