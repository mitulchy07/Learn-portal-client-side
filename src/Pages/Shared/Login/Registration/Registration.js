import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className='m-2'>
      <div className='flex flex-col w-full border-opacity-50'>
        <div>
          <div className='form-control p-5 my-4'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='name'
              className='input input-bordered'
            />
            <label className='label'>
              <span className='label-text'>Photo URL</span>
            </label>
            <input
              type='text'
              placeholder='photo-url'
              className='input input-bordered'
            />
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='email'
              className='input input-bordered'
            />
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='password'
              className='input input-bordered'
            />
            <label className='label'>
              <Link to='/login' className='label-text-alt link link-hover'>
                Already have an account?
              </Link>
            </label>
            <button className='btn btn-primary'>Register</button>
          </div>
        </div>
        <div className='divider'>OR</div>
        <div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
          content
        </div>
      </div>
    </div>
  );
};

export default Registration;
