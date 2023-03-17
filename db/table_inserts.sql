CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    description text
);

SELECT * FROM todos;

INSERT INTO todos (id, description) VALUES
(1, 'Must do some artwork'),
(2, 'Must tidy up gardens'),
(3, 'Must apply for jobs'),
(4, 'create app');