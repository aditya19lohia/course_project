import React from 'react';
import './TopBar.css';
import { Bell, MessageSquareMore, Filter } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Logo" />
        <a href='/home'>
          <h1>RateMyCourse</h1>
        </a>
      </div>
      <div className="search-bar">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input style={{marginLeft:"10px"}} type="text" placeholder="Search here..." />
        <Filter className="filter-icon" />
      </div>
      <div className="user-section">
        <MessageSquareMore className="icon" />
        <Bell className="icon" />
        <div className="profile">
          <img src="/images/demo_person.jpg" alt="User" />
          <span>Dipu paul</span>
          <i className="arrow-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
