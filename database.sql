
DROP TABLE message_genre;
DROP TABLE message;
DROP TABLE genre;
DROP TABLE "user";

-- restarts ids of tables 
ALTER SEQUENCE message_id_seq RESTART WITH 1;
ALTER SEQUENCE genre_id_seq RESTART WITH 1;
ALTER SEQUENCE message_genre_id_seq RESTART WITH 1;





CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



CREATE TABLE "genre" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar (100)
);

INSERT INTO genre (id, name) VALUES (1, 'Happy'), (2, 'Uplifting'), (3, 'Inspirational'), (4, 'Love'), (5, 'Humor'), (6, 'Deep');


CREATE TABLE "message" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (50),
  	"image"  VARCHAR(1000),
	"details" TEXT,
	"user_id" INT REFERENCES "user",
	"genre_id" INT REFERENCES "genre" ON DELETE CASCADE
);

INSERT INTO message (name, image, details, user_id, genre_id) 
VALUES ('Life', 'https://s3.india.com/wp-content/uploads/2020/06/Sunday-Quotes.jpg', 'Live your life each and every day with a purpose! Some days, it will be harder to do so than other days but you just have to keep going', 1, 2);

INSERT INTO message (name, image, details, user_id, genre_id) 
VALUES ('Strength', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marquez-happy-quotes-1574799048.jpg?crop=1xw:1xh;center,top&resize=480:*', 'Live your life each and every day with a purpose! Some days, it will be harder to do so than other days but you just have to keep going.', 1, 1);

INSERT INTO message (name, image, details, user_id, genre_id) 
VALUES ('Courage', 'https://i.pinimg.com/originals/6b/52/55/6b525534eb9efe9b996000183d2bd1a4.jpg', 'Live your life each and every day with a purpose! Some days, it will be harder to do so than other days but you just have to keep going.', 1, 3);

INSERT INTO message (name, image, details, user_id, genre_id) 
VALUES ('Endurance', 'https://www.happybirthdaymsg.com/wp-content/uploads/2020/01/happy-quotes-7.jpg', 'Live your life each and every day with a purpose! Some days, it will be harder to do so than other days but you just have to keep going.', 1, 4);



CREATE TABLE "message_genre" (
	"id" SERIAL PRIMARY KEY,
	"message_id" INT REFERENCES "message" ON DELETE CASCADE,
	"genre_id" INT REFERENCES "genre" ON DELETE CASCADE	
);


INSERT INTO message_genre (id, message_id, genre_id) 
VALUES (1, 1, 1);

SELECT message.name, message.image, message.details, message.id, message.genre_id AS genre  FROM "user"
JOIN message ON message.user_id = "user".id
LEFT JOIN genre ON genre.id = message.genre_id
WHERE "user".id = 1;

SELECT organization.id as org_id, organization.name,
                      organization.number, organization.email, organization.city,
                      organization.pdf, organization.website, organization.pictures,
                      organization.description, state.description AS state,
                      array_agg(categories_id) as categories
                      FROM "organization"
                      LEFT JOIN state ON state.id = "organization".state_id
                      LEFT JOIN organization_categories ON organization.id = organization_categories.org_id
                      WHERE organization.id = $1
                      GROUP BY organization.id, organization.name, organization.number,
                      organization.email, organization.city, organization.pdf,
                      organization.website, organization.pictures, organization.description,
                      state.description;

    
INSERT INTO "message" ("name", "image", "details", "user_id", "genre_id")
VALUES ('Wow', 'https://www.rd.com/wp-content/uploads/2020/04/happyquotes.jpg', 'wow so cool amazing so cool', 1, 2);
    
    

SELECT message.name, message.image, message.details FROM message_genre
JOIN message ON message.id = message_genre.message_id
JOIN genre ON message_genre.genre_id = genre.id
WHERE message.id = 1;

SELECT message.name, message.image, message.details FROM message_genre
JOIN message ON message.id = message_genre.message_id
JOIN genre ON message_genre.genre_id = genre.id
WHERE message.id = 1;