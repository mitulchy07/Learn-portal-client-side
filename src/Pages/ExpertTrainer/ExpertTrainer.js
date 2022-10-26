import React from 'react';

const ExpertTrainer = () => {
  return (
    <div className='my-4'>
      <h1 className='text-center fs-1 text-white'>Expert Trainer</h1>
      <div className='card lg:card-side bg-base-100 shadow-xl my-3'>
        <figure>
          <img src='https://placeimg.com/400/400/arch' alt='Album' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTrainer;
