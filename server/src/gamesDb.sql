CREATE DATABASE games_db;

\c games_db;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    deployment_date TEXT,
    rating FLOAT,
    platforms TEXT NOT NULL
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);