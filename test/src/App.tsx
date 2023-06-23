import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const ADD_API_URL = `https://localhost:7223/api/Add`;
  const [numberA, setNumberA] = useState('')
  const [numberB, setNumberB] = useState('')
  const [result, setResult] = useState<null | number>(null)

  const handleNumberAChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberA(event.target.value);
  }

  const handleNumberBChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberB(event.target.value);
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    axios.post(ADD_API_URL, {
      numberA: parseFloat(numberA),
        numberB: parseFloat(numberB)
    }).then(response => {
      setResult(response.data);
    })

  }

  return (
    <div className='form_design'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Number A:
          <input type="number" value={numberA} onChange={handleNumberAChange} />
        </label>
        <br />
        <label>
          Enter Number B:
          <input type="number" value={numberB} onChange={handleNumberBChange} />
        </label>
        <br />
        <button type='submit'>Calculate Sum</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default App;
