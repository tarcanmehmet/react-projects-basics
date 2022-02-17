import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const data = useFetch();
 
  return (
    <Follower />
  );
}

export default App
