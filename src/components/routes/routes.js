import {createBrowserRouter} from "react-router-dom";
import Root from '../../App';
import HomePage from '../index/homePage';
import ErrorPage from './errorPage';
import List from '../list/list';
import Details from '../new/details';

export const router = createBrowserRouter([
    {
      path: '/' ,
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <HomePage></HomePage>
        },
        {
          path:'/lista',
          element:<List></List>
        },
        {
          path:'/nuevaMeta',
          element:<Details></Details>
        }
      ],
    }
  
]);
