import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/header.jsx"
import Hero from "./components/hero.jsx"
import About from "./components/about.jsx"
import Services from "./components/services.jsx"
import data from "./components/data.js"
import Projects from "./components/projects.jsx";
import projectData from "./components/projectData.js";
import Contact from "./components/contact.jsx";
import Footer from './components/footer.jsx';
import './App.css'


function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Services data={data} />
         <Projects data={projectData} />
        <Contact />
        <Footer />
    </>
  )
}

export default App
