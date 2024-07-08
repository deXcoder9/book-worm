import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage.jsx';
import ListedBooks from './Components/Listed Books/ListedBooks.jsx';
import BookChart from './Components/Books Chart/BookChart.jsx';
import BookDetails from './Components/Home/Books/BookDetails.jsx';
import ArrivalBooks from './Components/New Arrivals/ArrivalBooks.jsx';
import Review from './Components/Reviews/Review.jsx';
import ErrorPage from './Components/Error Page/ErrorPage.jsx';
// import PagesToRead from './Components/Books Chart/PagesToRead.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/listedBooks',
        loader: () => fetch('/booksdata.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/bookChart',
        element: <BookChart></BookChart>
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('../booksdata.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path: '/arrival',
        element: <ArrivalBooks></ArrivalBooks>
      },
      {
        path: '/review',
        element: <Review></Review>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
