import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Column from './components/Columns';

function App() {
  return <div className="App">
  <Column state="Planned"></Column>
  <Column state="Ongoing"></Column>
  <Column state="Done"></Column>
  </div>;
}

export default App;
