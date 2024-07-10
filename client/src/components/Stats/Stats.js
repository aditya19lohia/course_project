import React from 'react'
import './Stats.css';
import StatusCard from '../StatusCards/StatusCards';
import { FaStar, FaClipboardList, FaUsers } from 'react-icons/fa';
function Stats() {
  return (
    <div className="stats-Container">
      <div className='status-cards'>
       <StatusCard
          backgroundColor="#fff4de"
          icon={<FaStar />}
          statistic="1,254"
          label="Total Reviews"
          progress={0.8}
        />
        <StatusCard
          backgroundColor="#ffe2e6"
          icon={<FaClipboardList />}
          statistic="326"
          label="Courses Rated"
          progress={0.65}
        />
        <StatusCard
          backgroundColor="#dcfce7"
          icon={<FaUsers />}
          statistic="5,721"
          label="Active Users"
          progress={0.92}
        />
        </div>
    </div>
  )
}

export default Stats
