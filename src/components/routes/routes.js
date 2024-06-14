import {createBrowserRouter} from "react-router-dom";
import Root from '../../App';
import HomePage from '../index/homePage';
import ErrorPage from './errorPage';
import List from '../list/list';
import Details from '../new/details';
import ModalForm from "../shared/modalForm";
import Tutorial from "../index/tutorial";
import DeleteItem from "../new/deleteItem";

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
          element:<List></List>,
          children:[
            {
              path:'/lista/example',
              element:<Tutorial></Tutorial>
            },
            {
              path:'/lista/:id',
              element:<ModalForm> <Details></Details> </ModalForm>,
              children:[
                {
                  path:'/lista/:id/deleted',
                  element: <ModalForm> <DeleteItem></DeleteItem> </ModalForm> ,
                }
              ]
            }
            
          ]
        },
        {
          path:'/nuevaMeta',
          element:<Details></Details>
        },
      ],
    }
  
]);
