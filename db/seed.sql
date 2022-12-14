USE employeetracker_db;

INSERT INTO department
(name) 
VALUES 
("HR"),
("Technology");

SELECT * FROM department;

INSERT INTO role
(title, salary, department_id)
VALUES

("Manager", 80000.0, 1),
("Tech. Manager", 90000.0, 2),
("Developer", 90000.0, 2);

SELECT * FROM role;

INSERT INTO employee
(first_name, last_name, role_id, manager_id) 
VALUES 
("Joe", "Smo", 2, null),
("Calvin", "Tran", 3, 1);