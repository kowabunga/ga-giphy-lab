import { useState } from 'react';
import './Form.css';

export default function Form({ giphySearchAPICall }) {
  const [giphyType, setGiphyType] = useState('');

  function handleChange(e) {
    setGiphyType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    giphySearchAPICall(giphyType);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='type of giphy'
        name='type'
        onChange={handleChange}
      />
      <button type='submit'>Find Gif</button>
    </form>
  );
}
