import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import News from './components/News';
// import { BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"general",
        element:<News exact key="general" apiKey = "37ec2bb3634d4ca1ab9e4d319df997e9" category = "general"/>
      },
      {
        path:"business",
        element:<News exact key="business" apiKey = "37ec2bb3634d4ca1ab9e4d319df997e9" category = "business"/>
      },
      {
        path:"entertainment",
        element:<News exact key="entertainment" apiKey = "37ec2bb3634d4ca1ab9e4d319df997e9" category = "entertainment"/>
      },
      {
        path:"health",
        element:<News exact key="health" apiKey = "37ec2bb3634d4ca1ab9e4d319df997e9" category = "health"/>
      },
      {
        path:"science",
        element:<News exact key="science" apiKey = "37ec2bb3634d4ca1ab9e4d319df997e9" category = "science"/>
      },
      {
        path:"sports",
        element:<News exact key="sports" apiKey = "37ec2bb3634d4ca1ab9e4d319df997e9" category = "sports"/>
      },
      {
        path:"technology",
        element:<News exact key="technology" apiKey = "37ec2bb3634d4ca1ab9e4d319df997e9" category = "technology"/>
      },
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
