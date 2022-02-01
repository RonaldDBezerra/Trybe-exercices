SELECT * FROM sakila.staff;
SELECT * FROM sakila.actor
LIMIT 5;
SELECT * FROM sakila.customer
LIMIT 5;

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('RONALD', 'DAMASIO', 5, 2, 1, 'JUBILEU');

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username, last_update)
VALUES ('jessica', 'silva', 5, 2, 1, 'jessiket', date(now())),
	   ('vania', 'maria', 5, 1, 1, 'vaninha', date(now()));

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;

Error Code: 1364. Field 'store_id' doesn't have a default value

