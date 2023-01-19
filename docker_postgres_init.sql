CREATE DATABASE prueba;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE civilized_pokemons(    uuid UUID DEFAULT uuid_generate_v4(),    name VARCHAR,    document_number VARCHAR,    document_type VARCHAR,    species VARCHAR,   type VARCHAR);


