import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import PDFFile from '../PDFFile/PDFFile';
import './Checkout.css';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const check = useLoaderData();

  return (
    <Container>
      <div className=' heading-div text-center text-white justify-center align-center'>
        <h2 className='card-title text-3xl'> {check.name} </h2>
        <PDFDownloadLink
          document={<PDFFile check={check} user={user}></PDFFile>}
          filename='Course-Details'
          className='btn btn-info m-2'
        >
          Download Course Outline
        </PDFDownloadLink>
      </div>
      <div className='m-5'>
        <h2 className='text-accent text-2xl'>Congatulations!</h2>
        <p className='text-xl text-white'>Student Details: </p>

        {user?.displayName ? (
          <p className='text-info'>Name: {user?.displayName} </p>
        ) : (
          <p className='text-danger'>Name: Not Found</p>
        )}

        {user.email ? (
          <p className='text-info'>Email: {user.email} </p>
        ) : (
          <p className='text-danger'>Email: Not Found.</p>
        )}
        {user.uid ? (
          <p className='text-info'>ID: {user.uid} </p>
        ) : (
          <p className='text-danger'>Email: Not Found.</p>
        )}
      </div>
      <div className='card lg:card-side bg-base-100 shadow-xl p-5 my-10 text-white'>
        <figure>
          <img
            src={check.img}
            alt='Album'
            className='max-w-xs rounded-lg shadow-2xl my-4'
          />
        </figure>
        <div className='card-body'>
          <div>
            <div className='my-2'>
              <h2 className='card-title text-success'> {check.name} </h2>
              <p className='text-warnig'> {check.details} </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
