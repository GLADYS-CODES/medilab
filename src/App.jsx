

import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import AppointmentForm from './components/AppointmentForm'

const App = () => {
  return (
    <div>
        
        <Navbar />
        <Home   />
        <About />
        <Services />
        <Contact />
        <AppointmentForm />
        </div>
  )
}

export default App