# Order Status Tracker

A full-stack Order Status Tracker application built using ASP.NET Core Web API and React.

## Overview

This application allows users to:

* View orders in a tabular format
* Filter orders by status
* Update order status through valid workflow transitions
* Handle invalid status changes with user-friendly error messages
* Support pagination for order listing

## Technology Stack

### Backend

* ASP.NET Core Web API (.NET 8)
* C#
* Repository Pattern
* Service Layer
* Dependency Injection
* In-Memory Data Store
* Custom Exception Handling

### Frontend

* React
* Axios
* React Router
* Functional Components
* React Hooks (useState, useEffect)
* Lazy Loading
* Responsive UI

## Project Structure

### Backend

OrderTracker.API

* Controllers
* Middleware
* Program.cs

OrderTracker.Business

* Services
* Business Rules

OrderTracker.Repository

* Repository Implementations
* In-Memory Data Store

OrderTracker.Model

* Entities
* DTOs
* Enums
* Exceptions

### Frontend

src

* api
* services
* pages
* components
* routes

# Order Status Tracker - Setup Guide

## Project Overview

Order Status Tracker is a full-stack application built using:

### Backend

* ASP.NET Core Web API
* C#
* Repository Pattern
* Service Layer
* Dependency Injection
* In-Memory Data Store

### Frontend

* React
* Axios
* React Router
* Functional Components
* React Hooks

---

# Backend Setup (ASP.NET Core Web API)

## Step 1: Create Solution

Open Visual Studio.

Create a new project:

Create Project → ASP.NET Core Web API

Project Name:

OrderTracker.API

Create Solution:

OrderTracker

---

## Step 2: Add Class Library Projects

Right Click Solution

Add → New Project

Create following Class Libraries:

OrderTracker.Business

OrderTracker.Repository

OrderTracker.Model

---

## Step 3: Add Project References

OrderTracker.API

Reference:

* OrderTracker.Business
* OrderTracker.Model

OrderTracker.Business

Reference:

* OrderTracker.Repository
* OrderTracker.Model

OrderTracker.Repository

Reference:

* OrderTracker.Model

---

## Step 4: Create Backend Folder Structure

### OrderTracker.API

Controllers

Middleware

Program.cs

appsettings.json

### OrderTracker.Business

Interfaces

Services

### OrderTracker.Repository

Interfaces

Implementations

Data

### OrderTracker.Model

Entities

DTO

Enums

Exceptions

---

## Step 5: Run Backend

Build Solution

Run Project

Swagger should open automatically.

Example:

https://localhost:7188/swagger

---

# Frontend Setup (React)

## Step 1: Create React Project

Open Terminal

Run:

npm create vite@latest order-tracker-ui -- --template react

Navigate to project:

cd order-tracker-ui

Install packages:

npm install

---

## Step 2: Install Required Packages

Axios:

npm install axios

React Router:

npm install react-router-dom

Optional UI Library:

npm install @mui/material @emotion/react @emotion/styled

Icons:

npm install @mui/icons-material

---

## Step 3: Frontend Folder Structure

src

api

services

components

pages

routes

assets

App.jsx

main.jsx

---

## Step 4: Create Components

Components:

* OrderTable
* StatusFilter
* ErrorMessage

Pages:

* OrderPage

Services:

* order-service

API:

* axios-instance

Routes:

* app-routes

---

## Step 5: Configure API Base URL

Backend URL:

https://localhost:7188

Configure Axios Base URL to connect React application with ASP.NET Core API.

---

## Step 6: Run React Application

Install dependencies:

npm install

Start application:

npm run dev

Application URL:

http://localhost:5173

---

# Features Implemented

## Order Listing

* View Orders
* Pagination Support
* Status Filtering

## Order Management

* Ship Order
* Deliver Order
* Cancel Order

## Validation Rules

Allowed:

Pending → Shipped

Shipped → Delivered

Pending → Cancelled

Shipped → Cancelled

Rejected:

Pending → Delivered

Delivered → Pending

Cancelled → Pending

Cancelled → Shipped

---

# Error Handling

Backend:

* 400 Bad Request
* 404 Not Found
* Custom Business Exceptions

Frontend:

* API Error Handling
* Validation Messages
* Loading Indicators

---

# Run Complete Application

Step 1

Start ASP.NET Core API

dotnet run

Step 2

Start React Application

npm run dev

Step 3

Open Browser

Frontend:

http://localhost:5173

Backend Swagger:

https://localhost:7188/swagger

---



## Business Rules

Valid Order Status Transitions:

Pending → Shipped

Shipped → Delivered

Pending → Cancelled

Shipped → Cancelled

Invalid transitions are rejected with appropriate error messages.

## Features

### Order Listing

* Retrieve all orders
* Pagination support
* Status-based filtering

### Order Updates

* Ship an order
* Deliver an order
* Cancel an order
* Business rule validation

### Error Handling

* Invalid status transitions
* Order not found scenarios
* API failure handling

## API Endpoints

### Get Orders

GET /api/orders

Query Parameters:

* status
* page
* pageSize

### Update Order Status

PATCH /api/orders/{id}/status

Request:

{
"status": "Shipped"
}

## Running the Application

### Backend

dotnet restore

dotnet build

dotnet run

### Frontend

npm install

npm run dev

## Future Enhancements

* Entity Framework Core
* SQL Server Integration
* Authentication & Authorization
* Unit Testing
* Docker Support
* CI/CD Pipeline
* Audit Logging
* Role-Based Access Control

<img width="1648" height="711" alt="image" src="https://github.com/user-attachments/assets/906365c9-9eb9-49fb-a6f8-415b8db0d7e1" />

