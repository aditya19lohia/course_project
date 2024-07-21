import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState('All Courses');
  const [selectedSemester, setSelectedSemester] = useState('All Semesters');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');
  const isOpen=true;
//   if (!isOpen) return null;

  return (
    <div className="search-modal-overlay">
      <div className="search-modal">
        <div className="search-modal-header">
          {/* <h2>Search Courses and Reviews</h2> */}
          <button onClick={onClose}>×</button>
        </div>
        
        <input
          type="text"
          placeholder="Search courses or professors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <div className="filter-section">
          <p>I'm looking for...</p>
          <div className="filter-options">
            <select value={selectedCourses} onChange={(e) => setSelectedCourses(e.target.value)}>
              <option value="All Courses">All Courses</option>
              {/* Add more options */}
            </select>
            <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
              <option value="All Semesters">All Semesters</option>
              {/* Add semester options */}
            </select>
            <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
              <option value="All Branches">All Branches</option>
              {/* Add branch options */}
            </select>
          </div>
        </div>
        
        <div className="quick-filters">
          <h3>Popular Courses</h3>
          {/* Add popular courses list */}
          
          <h3>Top Rated Professors</h3>
          {/* Add top rated professors list */}
        </div>
        
        <div className="search-results">
          {/* Add search results here */}
        </div>
        
        <div className="add-review-section">
          <button>Add Review</button>
          <button>Request Course Review</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;