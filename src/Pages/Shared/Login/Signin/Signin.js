import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div className='form-control p-5 my-4'>
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
          <Link href='#' className='label-text-alt link link-hover'>
            Forgot password?
          </Link>
          <Link to='/registration' className='label-text-alt link link-hover'>
            Register here
          </Link>
        </label>
        <button className='btn btn-primary'>Login</button>
      </div>
    </div>
  );
};

export default Signin;
