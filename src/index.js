import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './error-page';
import Banana from './Banana';
import Beer from './Beer';
import Sage from './Sage';
import VendingMachine from './VendingMachine.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage /> ,
    children : [
      {
        path: "",
        element: (<VendingMachine />)
      },
      {
        path: "banana",
        element: (<Banana />)
      },
      {
          path: "beer",
          element: (<Beer />)
      },
      {
          path: "sage",
          element: (<Sage />)
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
