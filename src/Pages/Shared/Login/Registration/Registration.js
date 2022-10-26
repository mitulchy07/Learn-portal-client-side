import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Registration = () => {
  const { createUser, auth } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = (event) => {
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const photo = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setErrorMsg('Password Should be at least 6 Charecter.');
      return;
    }
    setErrorMsg('');
    createUser(email, password)
      .then((result) => {
        setSuccess(true);
        form.reset();
        // verifyUser();
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        console.error(error);
      });
  };

  // const verifyUser = () => {
  //   sendEmailVerification(auth.currentUser)
  //     .then(() => {
  //       alert('Please Check your email (spam folder also) for verify.');
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  return (
    <Form onSubmit={handleRegister}>
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
                name='name'
              />
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input
                type='text'
                placeholder='photo-url'
                className='input input-bordered'
                name='photo'
              />
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                name='email'
                required
              />
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                name='password'
                required
              />
              <label className='label'>
                <Link to='/login' className='label-text-alt link link-hover'>
                  Already have an account?
                </Link>
              </label>
              <button className='btn btn-primary'>Register</button>
              <p className='text-danger'> {errorMsg} </p>
              {success && <p className='text-success'>Registration Success!</p>}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Registration;
