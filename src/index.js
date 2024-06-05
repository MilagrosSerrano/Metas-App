import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {router} from './components/routes/routes';
import Memory from './services/memory';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Memory>
     <RouterProvider router={router}/>
    </Memory>
  </React.StrictMode>
);


reportWebVitals();
