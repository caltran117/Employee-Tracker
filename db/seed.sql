USE employeetracker_db;

INSERT INTO department
(id, name) 
VALUES 
("Calvin", "Tran", "Spirit"),
("Doe", "Boy", "United"),
("trap", "dat", "Lufthansa Air");

SELECT * FROM department;

INSERT INTO role
(id, title, salary, airline_name, department_id)
VALUES

('A100', 
'2022-11-24 18:00',
'2022-11-24 20:00',
'EWR',
'CIA',
'ONTIME',
1),
('A200', 
'2022-11-25 18:00',
'2022-11-27 20:00',
'EWR',
'AAL',
'ONTIME',
3),
('B2022', 
'2022-11-25 18:00',
'2022-11-27 20:00',
'EWR',
'HAV',
'ONTIME',
1),
('C233', 
'2022-11-20 18:00',
'2022-11-21 20:00',
'EWR',
'NPE',
'CANCELLED',
2);

SELECT * FROM role;

INSERT INTO employee
(id, first_name, last_name, role_id, manager_id) 
VALUES 
("Calvin", "Tran", "Spirit"),
("Doe", "Boy", "United"),
("trap", "dat", "Lufthansa Air");