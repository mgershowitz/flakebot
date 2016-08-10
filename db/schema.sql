DROP TABLE if EXISTS users CASCADE;


DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id serial unique primary key,
  username VARCHAR(50) unique,
  email VARCHAR(255) unique not null,
  phone_number INT not null,
  password_digest TEXT not null,
  user_created timestamp not null default now()
);
CREATE INDEX on users (username) ;
CREATE INDEX on users (email) ;



DROP TABLE IF EXISTS saved_events;
CREATE TABLE favorite_recipes (
saved_id SERIAL PRIMARY KEY NOT NULL,
user_reference INTEGER REFERENCES users(user_id),
event_id INT NOT NULL,
event_time timestamp NOT NULL,
);



