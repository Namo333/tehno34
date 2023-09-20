import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/data/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h2>Age: {data.age}</h2>
      <h3>City: {data.city}</h3>
    </div>
  );
};

export default App;