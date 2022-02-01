SELECT * FROM customer;
SELECT * FROM address;

SELECT a.actor_id, concat(a.first_name, ' ', a.last_name) AS nome_completo, fa.film_id
FROM sakila.actor AS a 
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id;

SELECT concat(s.first_name, ' ', s.last_name) AS nome_completo, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.staff_id = a.address_id;

SELECT concat(c.first_name, ' ', c.last_name) AS nome_completo, c.email, c.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY nome_completo DESC
LIMIT 100;


