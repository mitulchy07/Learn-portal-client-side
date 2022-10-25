import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-neutral text-neutral-content'>
        <Link className='btn btn-ghost normal-case text-xl'>
          Learning Portal
        </Link>
        <div>
          <Link className='btn btn-ghost ' to='/'>
            Home
          </Link>
          <Link className='btn btn-ghost ' to='/courses'>
            Courses
          </Link>
          <Link className='btn btn-ghost ' to='/blogs'>
            Blogs
          </Link>
          <Link className='btn btn-ghost ' to='/faq'>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
