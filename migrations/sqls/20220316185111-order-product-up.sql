CREATE TABLE order_products( id SERIAL PRIMARY KEY, order_id bigint REFERENCES orders(id), product_id bigint REFERENCES products(id), quantity integer NOT NULL);

INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 1, 1);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 1, 3);