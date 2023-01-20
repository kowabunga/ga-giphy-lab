import { useState } from 'react';
import './Form.css';
import Button from '../Button/Button';

export default function Form({ giphySearchAPICall }) {
  const [giphyType, setGiphyType] = useState('');

  function handleChange(e) {
    setGiphyType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setGiphyType('');
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
      <Button type='submit' text='Search for Gif' disable={!giphyType} />
    </form>
  );
}
