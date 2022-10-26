import React from 'react';

const TopCourse = () => {
  return (
    <div className='my-5'>
      <h1 className='text-center fs-1 text-white my-4'>Our Best Course</h1>
      <div className='hero bg-base-200 rounded'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src='https://industrialtraining.pro/wp-content/uploads/2021/12/web-development-1.png'
            className='max-w-xs rounded-lg shadow-2xl'
            alt='Course'
          />
          <div>
            <h1 className='text-3xl font-bold text-white'>WEB DEVELOPMENT</h1>
            <p className='py-6 text-white'>
              Web development refers to activities related to creating,
              building, and maintaining a website. The pretty web page you view
              on your browser has a lot of work going on behind the scenes!
              Although each website might have different attributes, three
              fundamental components conduct every interaction between a user
              and a website.
            </p>
            <button className='btn btn-primary'>See This Course Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCourse;
