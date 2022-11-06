INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Engineering'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 4),
('Software Engineer', 120000, 4),
('Accountant', 60000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Robert', 'Arnold', 2, null),
('Joseph', 'Maurer', 1, 1),
('Michael', 'Moss', 4, null),
('Alli', 'Dodt', 3, 3),
('Shannon', 'Monahan', 6, null),
('Carlos', 'Sanchez', 5, 5),
('Gail', 'Morrison', 7, null),
('Christopher', 'Dudley', 8, 7);