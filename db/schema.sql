DROP TABLE IF EXISTS saved_events;
DROP TABLE if EXISTS users CASCADE;



CREATE TABLE users (
  user_id serial unique primary key,
  username VARCHAR(50) unique,
  email VARCHAR(255) unique not null,
  phone_number TEXT not null,
  password_digest TEXT not null,
  user_created timestamp not null default now()
);
CREATE INDEX on users (username) ;
CREATE INDEX on users (email) ;


CREATE TABLE saved_events (
saved_id SERIAL PRIMARY KEY NOT NULL,
user_reference INTEGER REFERENCES users(user_id),
event_id TEXT NOT NULL,
title TEXT NOT NULL,
image TEXT NOT NULL,
event_time TIMESTAMP NOT NULL
);


