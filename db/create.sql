-- $ heroku pg:psql < create.sql

DROP TABLE requests;
DROP TABLE shifts;
DROP TABLE members;
DROP TABLE teams;


-- days_in_shift: The days included in a shift table
-- max_shift_count_in_routine: The max shift tables generated in one routine
CREATE TABLE IF NOT EXISTS teams(
  id bigserial PRIMARY KEY,
  name varchar(80),
  days_in_shift bigint,
  max_shift_count_in_routine bigint
);

CREATE TABLE IF NOT EXISTS members(
  id bigserial PRIMARY KEY,
  name varchar(80),
  line_id varchar(80),
  team bigint references teams(id)
);

CREATE TABLE IF NOT EXISTS requests(
  id bigserial PRIMARY KEY,
  member bigint references members(id),
  team bigint references teams(id),
  start_time timestamp,
  end_time timestamp,
  availability real
);

CREATE TABLE IF NOT EXISTS shifts(
  id bigserial PRIMARY KEY,
  team bigint references teams(id),
  start_date date,
  time_table json
);
