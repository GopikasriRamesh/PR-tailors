import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'
import Contact  from './Components/Contact'
const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16"> 
        <section id="home" className="min-h-screen"><Home/></section>
        <section id="about" className="min-h-screen"><About/></section>
        <section id="services" className="min-h-screen"><Services/></section>
        <section id="portfolio" className="min-h-screen"><Portfolio/></section>
        <section id="testimonials" className="min-h-screen"><Testimonials/></section>
        <section id="contact" className="min-h-screen"><Contact/></section>
      </main>
    </>
  )
}

export default App
