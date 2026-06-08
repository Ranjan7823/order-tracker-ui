# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Step 1 - Create React Project

Open VS Code Terminal

npm create vite@latest order-tracker-ui -- --template react

cd order-tracker-ui

npm install
Step 2 - Install Required Packages
Axios
npm install axios
React Router
npm install react-router-dom
Step 3 - Folder Structure
src

├── api
│   └── axiosInstance.js
│
├── services
│   └── orderService.js
│
├── components
│   ├── OrderTable.jsx
│   ├── StatusFilter.jsx
│   └── ErrorMessage.jsx
│
├── pages
│   └── OrderPage.jsx
│
├── routes
│   └── AppRoutes.jsx
│
├── App.jsx
│
└── main.jsx
Step 4 - main.jsx

Purpose:

Application Entry Point
Router Initialization
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

createRoot(
  document.getElementById('root')
).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
Step 5 - App.jsx

Purpose:

Lazy Loading
Application Shell
import { Suspense, lazy } from 'react';

const AppRoutes =
  lazy(() => import('./routes/AppRoutes'));

function App() {
  return (
    <Suspense
      fallback={<h3>Loading...</h3>}
    >
      <AppRoutes />
    </Suspense>
  );
}

export default App;
Step 6 - routes/AppRoutes.jsx

Purpose:

Centralized Routing
import {
  Routes,
  Route
} from "react-router-dom";

import OrderPage
  from "../pages/OrderPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<OrderPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
Step 7 - api/axiosInstance.js

Purpose:

Single place for
Base URL
Headers
Timeout
import axios from "axios";

const axiosInstance =
  axios.create({

    baseURL:
      "https://localhost:7188/api/orders",

    timeout: 10000,

    headers: {
      "Content-Type":
        "application/json"
    }
});

export default axiosInstance;
Step 8 - services/orderService.js

Purpose:

All API calls
import apiInstance
from "../api/axiosInstance";

export const getOrders =
  async (
    status,
    page,
    pageSize
  ) => {

    const response =
      await apiInstance.get(
        "",
        {
          params:
          {
            status,
            page,
            pageSize
          }
        });

    return response.data;
};

export const updateOrderStatus =
  async (
    id,
    status
  ) => {

    const response =
      await apiInstance.patch(
        `/${id}/status`,
        {
          status
        });

    return response.data;
};
Step 9 - components/ErrorMessage.jsx
const ErrorMessage = ({
  message
}) => {

  if (!message)
    return null;

  return (

    <div
      style={{
        backgroundColor:
          "#ffe6e6",

        color:
          "#d32f2f",

        border:
          "1px solid #d32f2f",

        padding: "10px",

        marginBottom: "15px",

        borderRadius: "5px"
      }}
    >
      {message}
    </div>

  );
};

export default ErrorMessage;
Step 10 - components/StatusFilter.jsx
const StatusFilter = ({
  value,
  onChange
}) => {

  return (

    <select
      value={value}
      onChange={
        (e) =>
          onChange(
            e.target.value
          )
      }

      style={{
        padding: "10px",
        borderRadius: "6px",
        marginBottom: "15px"
      }}
    >

      <option value="">
        All
      </option>

      <option value="Pending">
        Pending
      </option>

      <option value="Shipped">
        Shipped
      </option>

      <option value="Delivered">
        Delivered
      </option>

      <option value="Cancelled">
        Cancelled
      </option>

    </select>

  );
};

export default StatusFilter;
Step 11 - components/OrderTable.jsx
const OrderTable = ({
  orders,
  onUpdateStatus
}) => {

  return (

    <table
      style={{
        width: "100%",
        borderCollapse:
          "collapse"
      }}
    >

      <thead>

        <tr>

          <th>ID</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {orders.map(order => (

          <tr key={order.id}>

            <td>{order.id}</td>

            <td>
              {order.customerName}
            </td>

            <td>
              {order.status}
            </td>

            <td>

              {order.status ===
                "Pending" && (

                <>
                  <button
                    onClick={() =>
                      onUpdateStatus(
                        order.id,
                        "Shipped"
                      )}
                  >
                    Ship
                  </button>

                  <button
                    onClick={() =>
                      onUpdateStatus(
                        order.id,
                        "Cancelled"
                      )}
                  >
                    Cancel
                  </button>
                </>
              )}

              {order.status ===
                "Shipped" && (

                <>
                  <button
                    onClick={() =>
                      onUpdateStatus(
                        order.id,
                        "Delivered"
                      )}
                  >
                    Deliver
                  </button>

                  <button
                    onClick={() =>
                      onUpdateStatus(
                        order.id,
                        "Cancelled"
                      )}
                  >
                    Cancel
                  </button>
                </>
              )}

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
};

export default OrderTable;
Step 12 - pages/OrderPage.jsx
import {
  useState,
  useEffect
}
from "react";

import {
  getOrders,
  updateOrderStatus
}
from "../services/orderService";

import OrderTable
from "../components/OrderTable";

import StatusFilter
from "../components/StatusFilter";

import ErrorMessage
from "../components/ErrorMessage";

const OrderPage = () => {

  const [orders,
    setOrders]
    = useState([]);

  const [status,
    setStatus]
    = useState("");

  const [loading,
    setLoading]
    = useState(false);

  const [error,
    setError]
    = useState("");

  const loadOrders =
    async () => {

      try {

        setLoading(true);

        const data =
          await getOrders(
            status,
            1,
            10);

        setOrders(data);
      }
      catch {

        setError(
          "Failed to load orders");
      }
      finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    loadOrders();

  }, [status]);

  const handleUpdate =
    async (
      id,
      newStatus
    ) => {

      try {

        await updateOrderStatus(
          id,
          newStatus);

        await loadOrders();
      }
      catch (error) {

        setError(
          error.response
            ?.data
            ?.message ||
          "Update Failed");
      }
    };

  if (loading)
  {
    return <h3>
      Loading...
    </h3>;
  }

  return (

    <div
      style={{
        maxWidth:
          "1200px",

        margin:
          "20px auto"
      }}
    >

      <h2>
        Order Tracker
      </h2>

      <ErrorMessage
        message={error}
      />

      <StatusFilter
        value={status}
        onChange={setStatus}
      />

      <OrderTable
        orders={orders}
        onUpdateStatus={
          handleUpdate
        }
      />

    </div>

  );
};

export default OrderPage;
Run Application

Backend

dotnet run

Frontend

npm run dev

Open:

http://localhost:5173
Interview Explanation

If asked:

Why Service Layer?

Keeps API calls separate from UI components.

Why Axios Instance?

Centralizes API configuration such as base URL, timeout, and future authentication handling.

Why Separate Components?

Improves maintainability, testability, and reusability.

Why React Router?

Allows scalable routing as additional pages are added.

This is a clean senior-level React implementation that matches the backend architecture you already built.
