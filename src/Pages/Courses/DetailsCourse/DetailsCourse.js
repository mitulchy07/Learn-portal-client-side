import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsCourse = () => {
  const details = useLoaderData();

  return (
    <div>
      <div className='hero bg-base-200 text-white'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src='https://placeimg.com/260/400/arch'
            className='max-w-sm rounded-lg shadow-2xl'
            alt='course'
          />
          <div>
            <h1 className='text-5xl font-bold'> {details.name} </h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={`/courses/${details.id}/checkout`}>
              <button className='btn btn-primary'>Enroll Now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
