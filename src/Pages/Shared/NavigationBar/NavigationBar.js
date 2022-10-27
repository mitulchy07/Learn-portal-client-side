import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Categories from '../../Categories/Categories/Categories';

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='text-white'
    >
      <Container>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Brand href='/'>Learning Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Link className='btn btn-ghost mx-1' to='/'>
              Home
            </Link>
            <Link className='btn btn-ghost mx-1' to='/categories/4'>
              Courses
            </Link>
            <Link className='btn btn-ghost mx-1' to='/blogs'>
              Blogs
            </Link>
            <Link className='btn btn-ghost mx-1' to='/faq'>
              FAQ
            </Link>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                width='30'
                height='10'
                className='d-none d-lg-block align-top rounded-circle'
                alt='React Bootstrap logo'
              />
            ) : (
              ' '
            )}
            {user ? (
              <Link
                className='btn btn-outline btn-warning mx-2'
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link className='btn btn-outline btn-warning mx-2' to='/login'>
                Login
              </Link>
            )}
          </Nav>
          <div className='d-lg-none'>
            <Categories></Categories>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
