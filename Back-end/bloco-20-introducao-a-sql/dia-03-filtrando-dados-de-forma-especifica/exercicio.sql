SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE active = false 
AND store_id = 2 
AND first_name 
NOT LIKE 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
AND replacement_cost >= 18
ORDER BY replacement_cost desc, title;

SELECT COUNT(active) FROM sakila.customer
WHERE active = true
AND store_id = 1;

SELECT COUNT(active) FROM sakila.customer
WHERE active = false
AND store_id = 1;

SELECT * FROM sakila.film
WHERE rating NOT IN ('G', 'PG', 'PG-13')
ORDER BY replacement_cost, title
LIMIT 50;


