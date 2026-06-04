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
