import React from 'react'
import './Stats.css';
import StatusCard from '../StatusCards/StatusCards';
import { FaStar, FaClipboardList, FaUsers } from 'react-icons/fa';
function Stats() {
  return (
    <div className="stats-Container">
    <h2 className="status-title">Status</h2>
      <div className='status-cards'>
       <StatusCard
          backgroundColor="#fff4de"
          icon={<FaStar style={{ color: '#F8D775' }} />}
          statistic="1,254"
          label="Total Reviews"
          progress={0.8}
          progressColor="#F8D775"
        />
        <StatusCard
          backgroundColor="#ffe2e6"
          icon={<FaClipboardList style={{ color: '#F29B9B' }} />}
          statistic="326"
          label="Courses Rated"
          progress={0.65}
          progressColor="#F29B9B"
        />
        <StatusCard
          backgroundColor="#dcfce7"
          icon={<FaUsers style={{ color: '#8BC3A3' }} />}
          statistic="5,721"
          label="Active Users"
          progressColor="#8BC3A3"
        />
        </div>
    </div>
  )
}

export default Stats
