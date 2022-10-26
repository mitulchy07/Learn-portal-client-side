import React from 'react';

const PageViews = () => {
  return (
    <div className='my-4'>
      <h1 className='text-center fs-1 text-white'>Page Update</h1>
      <div className='hero '>
        <div className='stats stats-vertical lg:stats-horizontal shadow my-5'>
          <div className='stat'>
            <div className='stat-title'>Downloads</div>
            <div className='stat-value'>31K</div>
            <div className='stat-desc'>Jan 1st - Feb 1st</div>
          </div>

          <div className='stat'>
            <div className='stat-title'>New Users</div>
            <div className='stat-value'>4,200</div>
            <div className='stat-desc'>↗︎ 400 (22%)</div>
          </div>

          <div className='stat'>
            <div className='stat-title'>New Registers</div>
            <div className='stat-value'>1,200</div>
            <div className='stat-desc'>↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageViews;
