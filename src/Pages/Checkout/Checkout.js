import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const check = useLoaderData();
  return (
    <div>
      <h1 className='text-center text-white'>
        Congratulations {user.displayName}! for Enroll to {check.name} course
      </h1>
    </div>
  );
};

export default Checkout;
