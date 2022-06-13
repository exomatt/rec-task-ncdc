--liquibase formatted sql
--changeset mpernal:01 endDelimiter:GO
INSERT INTO BOOK(title, author, isbn)
VALUES ('Loveless', 'Oseman Alice', '9788382661132')
GO

