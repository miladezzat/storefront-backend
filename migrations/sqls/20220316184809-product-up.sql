CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR(64) NOT NULL, price integer NOT NULL);

INSERT INTO products (name, price) VALUES ('Product 1', 100);
INSERT INTO products (name, price) VALUES ('Product 2', 200);