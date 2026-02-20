import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PinkHeartBackground from './PinkHeartBackground.jsx'
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <PinkHeartBackground>
      <Navbar />
      
    </PinkHeartBackground>
  );
}

export default App;
