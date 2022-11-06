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
('Joseph', 'Maurer', 4, 1),
('Michael', 'Moss', 7, 1),
('Alli', 'Dodt', 3, 1),
('Shannon', 'Monahan', 2, 1),
('Carlos', 'Sanchez', 1, 1),
('Gail', 'Morrison', 5, 1),
('Christopher', 'Dudley', 6, 1);