DROP TABLE IF EXISTS hunters, hunters_registered, events;

CREATE TABLE federation (
   license_number VARCHAR(17),
   lastname VARCHAR(100) NOT NULL,
   firstname VARCHAR(100) NOT NULL,
   CONSTRAINT federation_pk PRIMARY KEY(license_number)
);

CREATE TABLE hunters_registered (
   id SERIAL,
   license_number VARCHAR(17) NOT NULL,
   lastname VARCHAR(100) NOT NULL,
   firstname VARCHAR(100) NOT NULL,
   email_address VARCHAR(60) NOT NULL,
   CONSTRAINT hunters_registered_pk PRIMARY KEY(id),
   CONSTRAINT hunters_registered_license_unique UNIQUE(license_number)
);

CREATE TABLE events (
   id SERIAL,
   start_date DATE NOT NULL,
   end_date DATE NOT NULL,
   longitude DECIMAL(10, 8) NOT NULL,
   latitude DECIMAL(10, 8) NOT NULL,
   registered_id INT NOT NULL,
   CONSTRAINT events_pk PRIMARY KEY(id),
   CONSTRAINT events_fk FOREIGN KEY(registered_id) REFERENCES hunters_registered(id),
   CONSTRAINT events_dates_coordinates_unique UNIQUE(start_date, end_date, longitude, latitude)
);