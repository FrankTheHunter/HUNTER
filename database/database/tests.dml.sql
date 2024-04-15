DELETE FROM events;
DELETE FROM hunters_registered;

INSERT INTO hunters_registered (license_number, firstname, lastname, email_address) VALUES 
    ('201004480286-04-B', 'FRANK', 'RIZZARDI', 'frank@example.com'),
    ('202404480287-04-B', 'FRANK', 'MARSHALL', 'frank_marshall@example.com'),
    ('202404480288-04-B', 'HUGO', 'ARRU', 'hugo@example.com'),
    ('202404480289-04-B', 'CELIA', 'DULAC', 'celia@example.com');
    
INSERT INTO events (start_date, end_date, longitude, latitude, registered_id) VALUES 
	('2024-04-09', '2024-04-11', 40.7187275, -74.0062577, (select id from hunters_registered where license_number = '201004480286-04-B')),
	('2024-04-12', '2024-04-12', 34.0524787, -18.2437555, 14),
	('2024-04-13', '2024-04-13', 51.5078574, -0.1277458, 15),
	('2024-04-14', '2024-04-14', 51.5074542, -0.1277548, 16);
	
-- select id from hunters_registered where license_number = '201004480286-04-B';