import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
  return (
    <Container className='p-2'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
