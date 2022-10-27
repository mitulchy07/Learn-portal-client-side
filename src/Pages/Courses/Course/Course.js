import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ courseDetails }) => {
  return (
    <div className='card bg-base-100 my-2 text-white col-sm-12'>
      <figure>
        <img
          className='max-w-xs rounded-lg shadow-2xl my-4'
          src={courseDetails.img}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h5 className='card-title'>{courseDetails.name}</h5>
        <p> {courseDetails.details} </p>
        <Link className='btn btn-primary' to={`/courses/${courseDetails.id}`}>
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Course;
