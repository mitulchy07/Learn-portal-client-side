import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsCourse = () => {
  const details = useLoaderData();

  return (
    <Container>
      <div className='card lg:card-side bg-base-100 shadow-xl p-5 m-10 text-white'>
        <figure>
          <img
            src={details.img}
            alt='Album'
            className='max-w-xs rounded-lg shadow-2xl my-4'
          />
        </figure>
        <div className='card-body'>
          <div>
            <h2 className='card-title text-info'>{details.name}</h2>
            <p>{details.details}</p>
          </div>
          <div className='card-actions justify-start'>
            <div className='badge badge-outline'>{details.ratings}.30 h</div>
            <div className='badge badge-outline'> {details.price} $ </div>
            <div className='badge badge-outline'>{details.ratings} stars</div>
          </div>
          <div className='card-actions justify-start'>
            <Link
              className='btn btn-primary'
              to={`/courses/${details.id}/checkout`}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsCourse;
