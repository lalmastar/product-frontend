import React from 'react';
import Company from '../company/Company';
import Writer from '../animation/Writer.jsx';
import './home.css';
import HomeTable from '../table/HomeTable.jsx';

const Home = () => {
  return (
    <div>
      <div>
      <Writer/>
      </div>
      <HomeTable/>
      {/* <div className='home-table'><HomeTable/></div> */}
    </div>
  )
}

export default Home
