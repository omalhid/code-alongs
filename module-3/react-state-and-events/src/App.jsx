/* eslint-disable no-unused-vars */
// App.jsx

import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
 
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = event => {
    setTheme(event.target.value);
  };
 
  return (
    <div className={'App ' + theme}>
      <h1>React - state and events</h1>
      <Counter />
 
      {/* Add the following "select" dropdown */}
      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}
export default App;

