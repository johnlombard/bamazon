DROP DATABASE IF EXISTS products;
CREATE database products;

USE products;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price decimal(5,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pet Rock", "Toys", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stretch Armstrong", "Toys", 12.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yo-Yo", "Toys", 4.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fidget Spinner", "Toys", 1.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Squatty Potty", "Home", 29.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Intelligent Investor", "Books", 19.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars: The Phantom Menace", "Movies", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golden Crocs", "Footwear", 99.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("All Things Must Pass", "Music", 29.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dr. Martens", "Footwear", 99.99, 50);