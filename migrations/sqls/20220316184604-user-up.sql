CREATE TABLE users (id SERIAL PRIMARY KEY,firstName VARCHAR(50),lastName VARCHAR(50),password text);

INSERT INTO users (firstName, lastName, password) VALUES ('Milad', 'Ezzat', 'password');
INSERT INTO users (firstName, lastName, password) VALUES ('Milad', 'Ezzat 2', 'password');