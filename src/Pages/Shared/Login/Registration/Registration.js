import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Registration = () => {
  const { createUser, updateUserName } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const img = form.photoURL.value;
    if (password.length < 6) {
      setErrorMsg('Password Should be at least 6 Charecter.');
      return;
    }
    setErrorMsg('');
    createUser(email, password)
      .then((result) => {
        setSuccess(true);
        form.reset();
        const user = result.user;
        updateUserName(name, img);
        console.log(user);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <div className='border border-info rounded'>
      <Form onSubmit={handleRegister} className='text-white w-50 mx-auto p-2'>
        <Form.Group className='mb-3 ' controlId='formBasicEmail'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type='name' name='name' placeholder='Full Name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type='name' name='photoURL' placeholder='Photo URL' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' name='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
          />
        </Form.Group>
        {success ? (
          <p className='text-success'>Registration Successfull</p>
        ) : (
          ' '
        )}
        <p className='text-danger'>{errorMsg} </p>
        <div className='my-3'>
          <Link to='/login'>Already have an account?</Link>
        </div>
        <Button className='btn btn-success w-100' type='submit'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
