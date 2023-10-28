// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetched data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImageUrl(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
