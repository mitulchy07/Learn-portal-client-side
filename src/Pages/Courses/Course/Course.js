import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ courseDetails }) => {
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
          <div className='badge badge-outline'> {courseDetails.price} $ </div>
          <div className='badge badge-outline'>
            {courseDetails.ratings} stars
          </div>
        </div>
        <Link to={`/courses/${courseDetails.id}`}>
          <button className='btn btn-primary'>See Data</button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
