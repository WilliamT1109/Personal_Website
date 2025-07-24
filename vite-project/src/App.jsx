import { useState } from 'react'
import './App.css'
import { AboutSection } from './components/about/About'
import Navbar from './components/header/Header'
import Home from './components/home/Home'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <AboutSection />
    </>
  )
}

export default App
