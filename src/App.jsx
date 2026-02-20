import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom' 
import './App.css'
import PinkHeartBackground from './PinkHeartBackground.jsx'
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx'
import JournalPage from './pages/JournalPage.jsx'


function App() {
  return (
    <PinkHeartBackground>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/journal" element={<JournalPage/>}></Route>
      </Routes>
    </PinkHeartBackground>
  );
}

export default App;
