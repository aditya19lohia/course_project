import React, { useState } from 'react';
import { Search, Home, BarChart2, BookOpen,Bell, PieChart, Folder, LogOut, Moon, Sun } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter=()=>{
    setSidebarOpen(true);
  }
  const handleMouseLeave=()=>{
    setSidebarOpen(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src="path/to/your/logo.png" alt="Logo" />
          </span>

          <div className="text header-text">
            <span className="main">RateMyCourse</span>
          
          </div>
         
        </div>

        
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
           

            <li>
              <a href="#">
                <i className="icons"><Home size={20} /></i>
                <span className="text">Dashboard</span>
                
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icons"><BookOpen size={20} /></i>
                <span className="text">Courses</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icons"><Bell size={20} /></i>
                <span className="text">Notifications</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icons"><PieChart  size={20}/></i>
                <span className="text">Projects</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icons"><Folder size={20} /></i>
                <span className="text">Files</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
         
          <li>
            <a href="#" className="logout">
              <i className="icons"><LogOut size={20} /></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
