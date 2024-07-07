import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TopBar from '../components/TopBar/TopBar'
import Dashboard from '../components/Calendar_History'
function Home() {
  return (
    <div>
    
    <Navbar />
    <Dashboard />
    <TopBar />
    
    </div>
  )
}

export default Home