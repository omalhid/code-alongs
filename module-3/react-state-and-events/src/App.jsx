/* eslint-disable no-unused-vars */
// App.jsx

import './App.css';
import Counter from './components/Counter';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <h1>React - state and events</h1>
 
      <Counter />
    </div>
  );
}
export default App;

