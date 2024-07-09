import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import TopBar from '../components/TopBar/TopBar';
import CalendarHistory from '../components/Calendar_History';
// import Status from '../components/Status';
import TopRatedCourses from '../components/TopRatedCourse/TopRatedCourses';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <TopBar />
      <div className="content-wrapper">
        <div className="left-column">
          {/* <Status />/ */}
          <TopRatedCourses />
        </div>
        <div className="right-column">
          <CalendarHistory />
        </div>
      </div>
    </div>
  );
}

export default Home;
