/*import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TopBar.css';

const TopBar = ({ logo, username, realName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <Link to="/home"> 
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/home" className="project-name-link"> 
          <span className="project-name">RateMyCourse</span>
        </Link>
      </div>
      <div className="topbar-center">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="topbar-right">
        <div className="profile" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <span>{username} ({realName})</span>
          <span className="arrow">&#9660;</span>
          {dropdownOpen && (
            <div className="dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = ({ logo, username, realName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleApplyFilter = () => {
    // Handle filter application logic here
    console.log('Filters applied');
    setFilterOpen(false);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <Link to="/home"> 
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/home" className="project-name-link"> 
          <span className="project-name">RateMyCourse</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="search-bar-container">
          <span className="filter-icon" onClick={handleFilterToggle}>&#9881;</span>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </div>
      <div className="topbar-right">
        <div className="profile" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <span>{username} ({realName})</span>
          <span className="arrow">&#9660;</span>
          {dropdownOpen && (
            <div className="dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {filterOpen && (
        <div className="filter-dropdown">
          <div className="filter-column">
            <h3>Semester</h3>
            <label><input type="checkbox" /> Fall</label>
            <label><input type="checkbox" /> Spring</label>
            <label><input type="checkbox" /> Summer</label>
          </div>
          <div className="filter-column">
            <h3>Department</h3>
            <label><input type="checkbox" /> Computer Science</label>
            <label><input type="checkbox" /> Mathematics</label>
            <label><input type="checkbox" /> Physics</label>
          </div>
          <div className="filter-column">
            <h3>Rating</h3>
            <label><input type="checkbox" /> 1 Star</label>
            <label><input type="checkbox" /> 2 Stars</label>
            <label><input type="checkbox" /> 3 Stars</label>
            <label><input type="checkbox" /> 4 Stars</label>
            <label><input type="checkbox" /> 5 Stars</label>
          </div>
          <div className="filter-buttons">
            <button className="apply-filter-button" onClick={handleApplyFilter}>Apply Filter</button>
            <button className="clear-filter-button" onClick={handleCloseFilter}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
