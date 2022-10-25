import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
  const courseData = useLoaderData();

  return (
    <Container className='d-flex justify-content-center'>
      <div className='row row-cols-3 gap-2'>
        {courseData.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </Container>
  );
};

export default Courses;
