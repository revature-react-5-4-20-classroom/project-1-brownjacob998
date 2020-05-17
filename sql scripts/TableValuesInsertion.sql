INSERT INTO "Type"(typeID,"type") VALUES
	(1,'Lodging'),
	(2,'Travel'),
	(3,'Food'),
	(4,'Other');

INSERT INTO Status(statusID, status) VALUES
	(1,'Approved'),
	(2,'Pending'),
	(3,'Denied');
	
INSERT INTO "Role"(roleID, "role") VALUES
	(1,'Administrator'),
	(2,'Finance-Manager'),
	(3,'User');
	
INSERT INTO Users (userID, username, "password", firstname, lastname, email, "role") VALUES
	(DEFAULT,'jbrow','wasspord','Jacob', 'Brown','email@gmail.com',1),
	(DEFAULT,'testMan','testword','Test', 'Man','TestMan@gmail.com',2);
