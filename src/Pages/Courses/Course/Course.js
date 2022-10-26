import React from 'react';

const Course = ({ courseDetails }) => {
  console.log(courseDetails);
  return (
    <div className='card bg-base-100 my-2 text-white col-sm-12'>
      <figure>
        <img
          className='p-2'
          src='https://placeimg.com/400/225/arch'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h5 className='card-title'>{courseDetails.name}</h5>
        <p> {courseDetails.details} </p>
        <div className='card-actions justify-center'>
          <div className='badge badge-outline'>
            {courseDetails.ratings}.30 h
          </div>
          <div className='badge badge-outline'>Course</div>
          <div className='badge badge-outline'>
            {courseDetails.ratings} stars
          </div>
        </div>
        <button className='btn btn-primary'>{courseDetails.price}</button>
      </div>
    </div>
  );
};

export default Course;
