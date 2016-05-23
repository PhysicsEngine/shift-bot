-- Test data initialization
INSERT INTO teams (id, name, days_in_shift, max_shift_count_in_routine) VALUES(1, 'nobitanian', 7, 1);
INSERT INTO members (id, name, line_id, team) VALUES(1, 'gologo13', 'dummy', 1);
INSERT INTO members (id, name, line_id, team) VALUES(2, 'Kai', 'dummy', 1);
INSERT INTO members (id, name, line_id, team) VALUES(3, 'Shoe', 'dummy', 1);

-- gologo13's requests
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(1, 1,
  timestamp '2017-01-01 08:00:00',
  timestamp '2017-01-01 08:00:00' + interval '3 hours',
  0.9
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(1, 1,
  timestamp '2017-01-01 12:00:00',
  timestamp '2017-01-01 12:00:00' + interval '3 hours',
  0.2
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(1, 1,
  timestamp '2017-01-01 17:00:00',
  timestamp '2017-01-01 17:00:00' + interval '3 hours',
  0.5
);

-- Kai's requests
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(2, 1,
  timestamp '2017-01-01 08:00:00',
  timestamp '2017-01-01 08:00:00' + interval '3 hours',
  0.2
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(2, 1,
  timestamp '2017-01-01 12:00:00',
  timestamp '2017-01-01 12:00:00' + interval '3 hours',
  0.1
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(2, 1,
  timestamp '2017-01-01 17:00:00',
  timestamp '2017-01-01 17:00:00' + interval '3 hours',
  0.4
);

-- Shoe's requests
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(3, 1,
  timestamp '2017-01-01 08:00:00',
  timestamp '2017-01-01 08:00:00' + interval '3 hours',
  0.9
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(3, 1,
  timestamp '2017-01-01 12:00:00',
  timestamp '2017-01-01 12:00:00' + interval '3 hours',
  0.8
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(3, 1,
  timestamp '2017-01-01 17:00:00',
  timestamp '2017-01-01 17:00:00' + interval '3 hours',
  0.7
);
