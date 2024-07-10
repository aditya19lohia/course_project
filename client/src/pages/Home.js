import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TopBar from '../components/TopBar/TopBar'
import Dashboard from '../components/Calendar_History'
import TopRatedCourses from '../components/TopRatedCourse/TopRatedCourses'
function Home() {
  return (
    <div>
    
    <Navbar />
    <Dashboard />
    <TopBar />
    <TopRatedCourses />
    
    </div>
  )
}

export default Home