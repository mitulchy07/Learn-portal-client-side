import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className='my-2'>
      <div
        className='hero'
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/blue-3d-particles-background-design_1017-15410.jpg?w=1380&t=st=1666819687~exp=1666820287~hmac=15cabcd09a8c95586ecd0d4238980387ee7bc1a918fc98e561440104e2431719")`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold text-white'>
              Wellcome To Learning Portal
            </h1>
            <p className='mb-5 text-white'>
              We are your full-stack software development partner, web
              applications, mobile applications, IoT solutions, Blockchain
              technology. Tech Off is a one-stop platform for learning.
            </p>
            <Link to='/registration' className='btn btn-outline'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
