BEGIN;

DROP TABLE IF EXISTS event, article, activity
    CASCADE;

CREATE TABLE event
(
    event_id serial primary key ,
    title VARCHAR(100) ,
    _date DATE NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE article
(
    article_id serial primary key ,
    title VARCHAR(700) ,
    content TEXT NOT NULL
);

CREATE TABLE activity
(
    activity_id serial primary key ,
    title VARCHAR(100) ,
    content TEXT NOT NULL
);

COMMIT;