# Inventory Management REST API

A simple REST API built with **Node.js** and **Express.js** to perform CRUD operations on an inventory system. Data is stored in a local JSON file, making this project a good introduction to backend development and RESTful API design.

## Features

* View all inventory items
* Get a single item by its ID
* Add a new item
* Replace an existing item
* Update specific fields of an item
* Delete an item
* Request logging
* Proper HTTP status codes and error handling

## Tech Stack

* Node.js
* Express.js
* JavaScript (ES Modules)
* `fs/promises`

## Project Structure

```
inventory-management-api/
│
├── controllers/
│   └── itemController.js
│
├── routes/
│   └── itemRoutes.js
│
├── database.json
├── logs.txt
├── index.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/inventory-management-api.git
```

Move into the project directory:

```bash
cd inventory-management-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The server will run on:

```
http://localhost:3000
```

## API Endpoints

| Method | Endpoint     | Description                       |
| ------ | ------------ | --------------------------------- |
| GET    | `/`          | Check if the API is running       |
| GET    | `/items`     | Retrieve all items                |
| GET    | `/items/:id` | Retrieve an item by ID            |
| POST   | `/items`     | Add a new item                    |
| PUT    | `/items/:id` | Replace an existing item          |
| PATCH  | `/items/:id` | Update specific fields of an item |
| DELETE | `/items/:id` | Delete an item                    |

## Sample Item

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 70000,
  "quantity": 10,
  "category": "Electronics"
}
```

## Status Codes

The API uses standard HTTP status codes:

* **200** – Request successful
* **201** – Resource created successfully
* **400** – Invalid request or duplicate ID
* **404** – Requested item not found
* **500** – Internal server error

## What I Learned

This project helped me understand:

* Express routing
* Controllers
* Middleware
* REST API design
* CRUD operations
* Reading and writing JSON files
* Request validation
* HTTP methods and status codes
* Organizing a backend project

## Future Improvements

* Store data in MongoDB instead of a JSON file
* Add authentication
* Improve request validation
* Add pagination, filtering, and search
* Write automated tests

---

This project was built as part of my backend learning journey using Node.js and Express.js.
