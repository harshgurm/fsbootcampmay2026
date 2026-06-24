import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Customers from './Customers/Customers.tsx';
import UserList from './UserList/UserList.tsx';
import CustomerDetails from './Customers/CustomerDetails.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/customers/",
    element: <Customers />,
    children: [
      {
        path: "/customers/:id",
        element: <CustomerDetails />,
      },
    ]
  },
  {
    path: "/users",
    element: <UserList />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)