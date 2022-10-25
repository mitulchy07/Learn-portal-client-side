import React from 'react';

const Course = ({ course }) => {
  return (
    <div className='card w-90 bg-base-100 my-2 text-white	col col-sm-4 glass'>
      <figure>
        <img
          className='w-90 p-4'
          src='https://placeimg.com/400/225/arch'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h5 className='card-title'>{course.name}</h5>
        <p> {course.details} </p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div>
      </div>
    </div>
  );
};

export default Course;
