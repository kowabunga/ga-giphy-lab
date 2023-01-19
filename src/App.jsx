import { useState, useEffect } from 'react';
import './App.css';
import Gif from './components/Gif/Gif';

function App() {
  const [gifResult, setGifResult] = useState(null);
  const [query, setQuery] = useState('');

  // const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=IFaymHtOsBWgBhpjLYNnaPMTS2mG0eQb&q=${query}`;

  async function giphyRandomAPICall(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(typeof data);
      setGifResult(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    giphyRandomAPICall(
      'https://api.giphy.com/v1/gifs/random?api_key=IFaymHtOsBWgBhpjLYNnaPMTS2mG0eQb'
    );
  }, []);

  return (
    <div className='App'>
      {gifResult && <Gif gifData={gifResult} random={true} />}
    </div>
  );
}

export default App;
