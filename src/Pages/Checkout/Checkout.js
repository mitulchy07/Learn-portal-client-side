import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const check = useLoaderData();
  return (
    <div>
      <h1>Course name: {check.name} </h1>
    </div>
  );
};

export default Checkout;
