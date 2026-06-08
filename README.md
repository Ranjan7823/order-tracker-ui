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


export default OrderPage;
Run Application

Backend

dotnet run

Frontend

npm run dev

Open:

http://localhost:5173


Why Service Layer?

Keeps API calls separate from UI components.

Why Axios Instance?

Centralizes API configuration such as base URL, timeout, and future authentication handling.

Why Separate Components?

Improves maintainability, testability, and reusability.

Why React Router?

Allows scalable routing as additional pages are added.

This is a clean senior-level React implementation that matches the backend architecture you already built.

###
Order Status Tracker
Tech Stack
Backend
ASP.NET Core Web API
Repository Pattern
Service Layer
In-Memory Data Store
Frontend
React
Axios
React Router
Functional Components
Features
Get Orders
Status Filter
Pagination
Update Order Status
Business Rule Validation
Error Handling
Valid Status Flow
Pending → Shipped → Delivered

Pending → Cancelled

Shipped → Cancelled

Run Backend
dotnet run
