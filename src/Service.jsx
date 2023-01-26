import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import Profits from './components/Profits'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom'
import FullService from './components/FullService'

const Service = () => {
  const location = useLocation()
  const { link } = location.state

  return (
    <div className="App">
      <Navbar />
      <FullService link={link} />
      <Feedback />
      <Footer />
    </div>
  )
}

export default Service
