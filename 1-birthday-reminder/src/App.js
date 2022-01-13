import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
  <main>
    <div className="container">
      <List data={data} />
    </div>
  </main>);
}

export default App;
