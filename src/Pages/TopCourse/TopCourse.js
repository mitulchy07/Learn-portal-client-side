import React from 'react';

const TopCourse = () => {
  return (
    <div className='my-5'>
      <h1 className='text-center fs-1 text-white my-4'>Our Best Course</h1>
      <div className='hero bg-base-200 rounded'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src='https://placeimg.com/260/400/arch'
            className='max-w-sm rounded-lg shadow-2xl'
            alt='Course'
          />
          <div>
            <h1 className='text-5xl font-bold text-white'>Box Office News!</h1>
            <p className='py-6 text-white'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCourse;
