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
-- INSERT INTO links (url, short, ip, create_time, expire_time) VALUES ('https://www.baidu.com', 'baidu', '127.0.0.1', '2020-01-01 00:00:00', '2020-01-01 00:00:00');