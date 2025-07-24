import { useState } from 'react'
import './App.css'
import { AboutSection } from './components/about/About'
import Navbar from './components/header/Header'
import Home from './components/home/Home'
import { SkillsSection } from './components/skills/Skills'
import { ProjectsSection } from './components/projects/Projects'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    </>
  )
}

export default App
