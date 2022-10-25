import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Categories from '../../Pages/Categories/Categories/Categories';
import Category from '../../Pages/Categories/Category/Category';
import Course from '../../Pages/Courses/Course/Course';
import Courses from '../../Pages/Courses/Courses/Courses';
import Home from '../../Pages/Home/Home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/categories',
        element: <Categories></Categories>,
      },
      {
        path: '/categories/:id',
        element: <Category></Category>,
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
      },

      {
        path: '/courses/:id',
        element: <Course></Course>,
      },
    ],
  },
]);
