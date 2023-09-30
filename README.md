Seeding and Migration Code

Migration SQL UP 

ALTER TABLE actor
ADD COLUMN age VARCHAR;

Seeding SQL

INSERT INTO actor (actor_id, first_name, last_name, last_update)
VALUES (202, 'karlk', 'wise', CURRENT_TIMESTAMP), (203, 'ilomi', 'quert', CURRENT_TIMESTAMP), 
(204, 'andri', 'swezx', CURRENT_TIMESTAMP), (205, 'malyon', 'adict', CURRENT_TIMESTAMP)
