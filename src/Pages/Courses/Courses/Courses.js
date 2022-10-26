import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Categories from '../../Categories/Categories/Categories';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
  const courseData = useLoaderData();

  return (
    <Container>
      <Row>
        <Col lg='2' className='d-none d-lg-block'>
          <Categories></Categories>
        </Col>
        <Col lg='10'>
          <div className='course-card'>
            {courseData.map((courseData) => (
              <Course key={courseData.id} courseDetails={courseData}></Course>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
