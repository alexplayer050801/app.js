CREATE DATABASE users;

USE users;

CREATE TABLE login (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO login (username, password) VALUES
  ('Alex', '1234'),
  ('Andrei', '1234'),
  ('Maria', '1234');
