import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Categories from '../../Pages/Categories/Categories/Categories';
import Category from '../../Pages/Categories/Category/Category';
import Course from '../../Pages/Courses/Course/Course';
import Courses from '../../Pages/Courses/Courses/Courses';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Shared/Blogs/Blogs';
import Faq from '../../Pages/Shared/FAQ/Faq';
import Registration from '../../Pages/Shared/Login/Registration/Registration';
import Signin from '../../Pages/Shared/Login/Signin/Signin';

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
        path: '/all-courses',
        element: <Categories></Categories>,
      },
      {
        path: '/categories/:id',
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://server-site-nx300qx8i-mitulchy07.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: '/courses',
        element: <Category></Category>,
      },
      {
        path: '/courses/:id',
        element: <Course></Course>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
      },
      {
        path: '/login',
        element: <Signin></Signin>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
    ],
  },
]);
