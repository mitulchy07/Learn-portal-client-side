import React from 'react';

const ExpertTrainer = () => {
  return (
    <div className='my-4'>
      <h1 className='text-center fs-1 text-white'>Expert Trainer</h1>
      <div className='card lg:card-side bg-base-100 shadow-xl my-3'>
        <figure>
          <img
            src='https://miro.medium.com/max/1400/1*vqnK6N5Kttb6P1ICnJ5WGA.png'
            alt='Album'
            className='max-w-xs rounded-lg shadow-2xl'
          />
        </figure>
        <div className='card-body text-white'>
          <h2 className='card-title'>Why you need an expert Trainer?</h2>
          <p>
            An experienced trainer has knowledge and understanding of many
            learning and development methodologies, training cycles and learning
            types that they can use when developing training materials.
          </p>
          <div className='card-actions justify-center'>
            <button className='btn btn-primary'>Stay Connected</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTrainer;
