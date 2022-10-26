import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Signin = () => {
  const { signInUser, handleGoogleSignIn, handleGithubSignIn } =
    useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleUser = (event) => {
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setSuccess(true);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form onSubmit={handleUser}>
      <div>
        <div className='form-control p-5 my-4'>
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

          <div className='my-3'>
            <Link href='#' className='label-text-alt link link-hover'>
              Forgot password?
            </Link>

            <div></div>
            <Link to='/registration' className='label-text-alt link link-hover'>
              Register here
            </Link>
          </div>
          <button className='btn btn-success'>Login</button>
          {success && <p className='text-success my-2'>Login Successfull!</p>}
          <div className='divider'>OR</div>
          <div className='btn-group'>
            <button className='btn btn-primary' onClick={handleGoogleSignIn}>
              Login with Google
            </button>
            <button className='btn' onClick={handleGithubSignIn}>
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Signin;
