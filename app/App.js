import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';

const App = () => {
  return (
    <Hello />
  )
};

render(<App />, document.getElementById('app'));