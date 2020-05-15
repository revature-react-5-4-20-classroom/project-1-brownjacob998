CREATE TABLE Users(
	userID SERIAL NOT NULL,
	username varchar(30) UNIQUE NOT NULL,
	"password" varchar(40) NOT NULL,
	firstName varchar(30) NOT NULL,
	lastName varchar(30) NOT NULL,
	email varchar(100) NOT NULL,
	"role" varchar(30) NOT NULL,
	CONSTRAINT pk_users PRIMARY KEY (userID)
);
CREATE TABLE "Role" (
	roleID integer NOT NULL,
	"role" varchar(30) NOT NULL,
	CONSTRAINT pk_role PRIMARY KEY (roleID)
);
CREATE TABLE Reimbursement (
	reimbursementID serial NOT NULL,
	author integer NOT NULL,
	amount Integer NOT NULL,
	dateSubmitted timestamp NOT NULL,
	dateResolved timestamp NOT NULL,
	description varchar(300) NOT NULL,
	resolver integer,
	status integer NOT NULL,
	"type" integer,
	CONSTRAINT pk_reimbursement PRIMARY KEY(reimbursementID)
);
CREATE TABLE Status (
	statusID integer NOT NULL,
	status varchar(100) NOT NULL,
	CONSTRAINT pk_status PRIMARY KEY (statusID)
);
CREATE TABLE "Type" (
	typeID integer NOT NULL,
	"type" varchar(100) NOT NULL,
	CONSTRAINT pk_type PRIMARY KEY (typeID)
);
ALTER TABLE Reimbursement ADD CONSTRAINT fk_author FOREIGN KEY (author) REFERENCES Users (userID);
ALTER TABLE Reimbursement ADD CONSTRAINT fk_resolver FOREIGN KEY (resolver) REFERENCES Users (userID);
ALTER TABLE Reimbursement ADD CONSTRAINT fk_status FOREIGN KEY (status) REFERENCES Status (statusID);
ALTER TABLE Reimbursement ADD CONSTRAINT fk_type FOREIGN KEY ("type") REFERENCES "Type" (typeID);
ALTER TABLE Users ADD CONSTRAINT fk_role FOREIGN KEY ("role") REFERENCES "Role" (roleID);