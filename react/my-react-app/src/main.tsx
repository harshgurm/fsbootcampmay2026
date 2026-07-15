import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Customers from './Customers/Customers.tsx';
import UserList from './UserList/UserList.tsx';
import List from './UserList/List.tsx';
import CustomerDetails from './Customers/CustomerDetails.tsx';
import Navbar from './Navbar/Navbar.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Hooks/useMemo.tsx'
import Departments from './Departments/Department.tsx'
import CustomerForm from './Customers/CustomerForm.tsx';
import DepartmentFormik from './Departments/DepartmentFormik.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
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
          {
            path: "/customers/add",
            element: <CustomerForm />,
          },
        ]
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "employees",
        element: <List />,
      },
      {
        path: "hooks",
        element: <Counter />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "departments/add",
        element: <DepartmentFormik />,
      }
    ]
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)