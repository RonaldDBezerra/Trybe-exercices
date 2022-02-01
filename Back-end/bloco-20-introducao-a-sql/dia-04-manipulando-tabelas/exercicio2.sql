SELECT * FROM sakila.actor;
SELECT * FROM sakila.film;

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 AND
rating IN ('G', 'PG', 'PG-13') AND
replacement_cost > 20;