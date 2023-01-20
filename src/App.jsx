import { useState, useEffect } from 'react';
import './App.css';
import Gif from './components/Gif/Gif';
import Form from './components/Form/Form';
import Button from './components/Button/Button';

function App() {
  const [gifResult, setGifResult] = useState(null);

  async function giphyRandomAPICall() {
    try {
      const res = await fetch(
        'https://api.giphy.com/v1/gifs/random?api_key=IFaymHtOsBWgBhpjLYNnaPMTS2mG0eQb'
      );
      const data = await res.json();
      setGifResult(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function giphySearchAPICall(query) {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=IFaymHtOsBWgBhpjLYNnaPMTS2mG0eQb&q=${query}`
      );
      const data = await res.json();
      let random = Math.floor(Math.random() * 50);
      setGifResult(data.data[random]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    giphyRandomAPICall();
  }, []);

  return (
    <div className='App'>
      <h1>Giphy</h1>
      <Form giphySearchAPICall={giphySearchAPICall} />
      <Button text='New Random Gif' onClickFunction={giphyRandomAPICall} />
      {gifResult && <Gif gifData={gifResult} />}
    </div>
  );
}

export default App;
