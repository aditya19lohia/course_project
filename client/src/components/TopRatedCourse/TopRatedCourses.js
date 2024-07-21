/*import React, { useState, useEffect } from 'react';
import './TopRatedCourses.css';

const TopRatedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch top rated courses from your API
    // This is a placeholder, replace with actual API call
    const fetchTopRatedCourses = async () => {
      // const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setCourses(data);

      // Placeholder data
      setCourses([
        { id: 1, name: 'Introduction to React', professor: 'Dr. Smith', rating: 4.8, color: '#FF5722' },
        { id: 2, name: 'Advanced Algorithms', professor: 'Prof. Johnson', rating: 4.7, color: '#2196F3' },
        { id: 3, name: 'Data Science Fundamentals', professor: 'Dr. Lee', rating: 4.6, color: '#4CAF50' },
        { id: 3, name: 'Data Science Fundamentals', professor: 'Dr. Lee', rating: 4.6, color: '#4CAF50' },
        { id: 3, name: 'Data Science Fundamentals', professor: 'Dr. Lee', rating: 4.6, color: '#4CAF50' },
        // { id: 3, name: 'Data Science Fundamentals', professor: 'Dr. Lee', rating: 4.6, color: '#4CAF50' },
     
      ]);
    };

    fetchTopRatedCourses();
  }, []);

  return (
    <div className="top-rated-courses">
      <h2 className="top-rated-courses__title">Top Rated Courses</h2>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <div className="course-icon" style={{backgroundColor: course.color}}>
              {course.name.charAt(0)}
            </div>
            <div className="course-info">
              <div className="course-name">{course.name}</div>
              <div className="professor-name">{course.professor}</div>
            </div>
            <div className="course-rating">{course.rating.toFixed(1)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedCourses;*/

import React, { useState, useEffect } from 'react';
import './TopRatedCourses.css';

const TopRatedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch top rated courses from your API
    // This is a placeholder, replace with actual API call
    const fetchTopRatedCourses = async () => {
      // Placeholder data
      setCourses([
        { id: 1, name: 'Introduction to React', professor: 'Dr. Smith', rating: 4.8, color: '#FF5722' },
        { id: 2, name: 'Advanced Algorithms', professor: 'Prof. Johnson', rating: 4.7, color: '#2196F3' },
        { id: 3, name: 'Data Science Fundamentals', professor: 'Dr. Lee', rating: 4.6, color: '#4CAF50' },
        { id: 4, name: 'Machine Learning Basics', professor: 'Dr. Brown', rating: 4.5, color: '#9C27B0' },
        { id: 5, name: 'Web Development with JavaScript', professor: 'Prof. Davis', rating: 4.4, color: '#FFC107' },
      ]);
    };

    fetchTopRatedCourses();
  }, []);

  return (
    <div className="top-rated-courses">
      <h2 className="top-rated-courses__title">Top Rated Courses</h2>
      <div className="course-header-bar">
        <span className="header-item course-name" style={{textDecoration:"none"}}>Course Name</span>
        <span className="header-item professor-name" style={{textDecoration:"none"}}>Professor Name</span>
        <span className="header-item course-rating" style={{textDecoration:"none"}}>Course Rating</span>
      </div>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <div className="course-icon" style={{backgroundColor: course.color}}>
              {course.name.charAt(0)}
            </div>
            <div className="course-name">{course.name}</div>
            <div className="professor-name">{course.professor}</div>
            <div className="course-rating">{course.rating.toFixed(1)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedCourses;