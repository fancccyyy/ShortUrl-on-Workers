--init.sql
DROP TABLE IF EXISTS links;
CREATE TABLE links (
    [id] INTEGER PRIMARY KEY NOT NULL,
    [url] TEXT NOT NULL,
    [short] TEXT NOT NULL,
    [ip] TEXT NOT NULL,
    [create_time] TEXT NOT NULL,
    [expire_time] TEXT NOT NULL
);
