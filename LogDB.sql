CREATE DATABASE cotalkerlogtest;

\c cotalkerlogtest

CREATE TABLE log(
    companyId INT,
    userId INT,
    method_apiid VARCHAR (50),
    tiempo_ms INT,
    fecha TIMESTAMP PRIMARY KEY,
    source VARCHAR (10)
);


COPY log FROM '.\log.practica.2.csv' DELIMITER ',' CSV;


