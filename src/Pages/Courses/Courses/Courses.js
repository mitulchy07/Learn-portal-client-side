import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('https://server-site-nx300qx8i-mitulchy07.vercel.app/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
