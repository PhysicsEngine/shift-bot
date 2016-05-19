-- $ heroku pg:psql < create.sql

DROP TABLE requests;
DROP TABLE members;
DROP TABLE teams;
DROP TABLE shifts;

CREATE TABLE IF NOT EXISTS teams(
  id bigserial PRIMARY KEY,
  name varchar(80)
);

CREATE TABLE IF NOT EXISTS members(
  id bigserial PRIMARY KEY,
  name varchar(80),
  team bigint references teams(id)
);

CREATE TABLE IF NOT EXISTS requests(
  id bigserial PRIMARY KEY,
  member bigint references members(id),
  request json
);

CREATE TABLE IF NOT EXISTS shifts(
  id bigserial PRIMARY KEY,
  start_time date,
  end_time date,
  time_table json
);
