import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preview from './components/flotinghero/parallax-floating-demo.jsx';
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { SmoothScrollHero } from './components/SmoothScrollHero.jsx';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Preview />
        <SmoothScrollHero />
        <Footer />
      </Router>
    </>
  )
}

export default App
