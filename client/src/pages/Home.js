import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Calendar from '../components/Navbar/Calendar'
import TopBar from '../components/TopBar/TopBar'
import History from '../components/History/History'
function Home() {
  return (
    <div>
    
    <Navbar />
    <Calendar /> 
    <TopBar />
    <History />
    
    </div>
  )
}

export default Home