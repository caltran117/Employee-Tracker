DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department (
	id INT auto_increment NOT NULL,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
	id INT auto_increment NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    airline_name VARCHAR(50) NOT NULL,
    department_id (id)
);

CREATE TABLE employee (
	id INT auto_increment NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);