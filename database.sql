

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "genre" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar (100)
);

INSERT INTO genre (id, name) VALUES (1, 'Positive'), (2, 'Uplifting'), (3, 'Supportive'), (4, 'Love');


CREATE TABLE "message" (
	"id" SERIAL PRIMARY KEY,
  	"image"  VARCHAR(1000),
	"details" TEXT,
	"user_id" INT REFERENCES "user",
	"genre_id" INT REFERENCES "genre" ON DELETE CASCADE
);

INSERT INTO message (id, image, details, user_id, genre_id) 
VALUES (1, 'https://s3.india.com/wp-content/uploads/2020/06/Sunday-Quotes.jpg', 'Live your life each and every day with a purpose! Some days, it will be harder to do so than other days but you just have to keep going.', 1, 2);


CREATE TABLE "message_genre" (
	"id" SERIAL PRIMARY KEY,
	"message_id" INT REFERENCES "message" ON DELETE CASCADE,
	"genre_id" INT REFERENCES "genre" ON DELETE CASCADE	
);


INSERT INTO message_genre (id, message_id, genre_id) 
VALUES (1, 1,1)