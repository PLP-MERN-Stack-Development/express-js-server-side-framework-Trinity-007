Express API Assignment
 Project Overview

This is a simple Express.js REST API built as part of an assignment.
It demonstrates how to set up a Node.js backend server with routes, controllers, and middleware for handling CRUD operations on a products resource.

 Technologies Used

Node.js – Server environment

Express.js – Web framework for building APIs

Postman – For testing API endpoints

 Project Structure
express_api_assignment/
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── models/
│   └── (optional models if added)
├── server.js
├── package.json
└── README.md

 How to Run the Project
1️ Clone the Repository
git clone https://github.com/<Trinity-007>/express_api_assignment.git

2️ Navigate into the Project Folder
cd express_api_assignment

3️ Install Dependencies
npm install

4️ Start the Server
npm start

5️ Verify Server is Running

Open your browser or Postman and go to:
http://localhost:5000/api/products

You should see:

{
  "message": "GET all products"
}

 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a single product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
Example JSON for POST Request
{
  "name": "Wireless Headphones",
  "price": 150,
  "description": "Noise cancelling over-ear headphones"
}

 Notes

Make sure port 5000 is available before running the server.

You can modify routes or controllers to add database integration later.

 Author

Aladesae Tosin (Trinity)
Student / Developer
Express API Assignment Project – 2025
