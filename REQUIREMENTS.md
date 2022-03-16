# All the Detailed Routes for Our Apis :

## User Apis :

- GET http://localhost:3000/user (to get a list of all users)
- GET http://localhost:3000/user/:id (to get a specific user , needs Authorization)
- POST http://localhost:3000/user (to create a new user)
- POST http://localhost:3000/user/login (to login a user)
- PUT http://localhost:3000/user/:id (to update the data of a user , needs Authorization)
- DELETE http://localhost:3000/user/:id (to delete certain user , needs Authorization )

## Product Apis :

- GET http://localhost:3000/products (to get a list of all products)
- GET http://localhost:3000/products/:id (to get a specific product)
- POST http://localhost:3000/products (to create a new product , need Authorization)
- PUT http://localhost:3000/products/:id (to update the data of a product , needs Authorization)
- DELETE http://localhost:3000/products/:id (to delete certain product , needs Authorization )

## Order Apis :

- GET http://localhost:3000/orders (to get a list of all orders , needs Authorization)
- GET http://localhost:3000/orders/:id (to get a specific order , need Authorization)
- GET http://localhost:3000/orders/:user_id (to get current order for specific user , need Authorization )
- POST http://localhost:3000/orders (to create a new order , need Authorization)
- PUT http://localhost:3000/orders/:id (to update the data of a order , needs Authorization)
- DELETE http://localhost:3000/orders/:id (to delete certain order , needs Authorization )

## Order_Products Apis :

- GET http://localhost:3000/orders/get-order/:id ( to get order details by order id , need authorization)
- POST https://localhost:3000/orders/new-product ( to add new product to specific order , need authorization)

## DATABASE SCHEMA :

### users Table :

- first Column : id of type >> integer [Primary Key]
- Second Column : firstName of type >> VARCHAR(50)
- Third Column : lastName of type >> VARCHAR(50)
- Fourth Column : password of type >> text

### products Table :

- first Column : id of type >> integer [Primary Key]
- Second Column : name of type >> VARCHAR(64)
- Third Column : price of type >> integer

### orders Table :

- first Column : id of type >> integer [Primary Key]
- Second Column : status of type >> VARCHAR(15)
- Third Column : user_id of type >> bigint [foreign key References table users(id)]

### order_products Table :

- first Column : id of type >> integer [Primary Key]
- Second Column : order_id of type >> bigint [foreign key References table orders(id)]
- Third Column : product_id of type >> bigint [foreign key References table products(id)]
- Fourth Column : quantity of type >> integer