-- Test data initialization
INSERT INTO teams (id, name, days_in_shift, max_shift_count_in_routine) VALUES(1, 'nobitanian', 7, 1);
INSERT INTO members (id, name, line_id, team) VALUES(0, 'admin', 'dummy', 1);
INSERT INTO members (id, name, line_id, team) VALUES(1, 'gologo13', 'dummy', 1);
INSERT INTO members (id, name, line_id, team) VALUES(2, 'Kai', 'dummy', 1);
INSERT INTO members (id, name, line_id, team) VALUES(3, 'Shoe', 'dummy', 1);

-- admin's requests
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(0, 1,
  now() + interval '3 days' + interval '1 hours',
  now() + interval '3 days' + interval '3 hours',
  0.1
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(0, 1,
  now() + interval '2 days' + interval '1 hours',
  now() + interval '2 days' + interval '2 hours',
  0.8
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(0, 1,
  now() + interval '5 days',
  now() + interval '5 days' + interval '4 hours',
  0.3
);

-- gologo13's requests
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(1, 1,
  now() + interval '3 days' + interval '10 hours',
  now() + interval '3 days' + interval '11 hours',
  0.9
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(1, 1,
  now() + interval '4 days' + interval '10 hours',
  now() + interval '4 days' + interval '13 hours',
  0.2
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(1, 1,
  now() + interval '5 days' + interval '12 hours',
  now() + interval '5 days' + interval '13 hours',
  0.5
);

-- Kai's requests
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(2, 1,
  now() + interval '1 days' + interval '5 hours',
  now() + interval '1 days' + interval '7 hours',
  0.2
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(2, 1,
  now() + interval '2 days' + interval '5 hours',
  now() + interval '2 days' + interval '6 hours',
  0.1
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(2, 1,
  now() + interval '1 days' + interval '10 hours',
  now() + interval '1 days' + interval '14 hours',
  0.4
);

-- Shoe's requests
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(3, 1,
  now() + interval '2 days' + interval '11 hours',
  now() + interval '2 days' + interval '13 hours',
  0.9
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(3, 1,
  now() + interval '5 days' + interval '6 hours',
  now() + interval '5 days' + interval '9 hours',
  0.8
);
INSERT INTO
  requests (member, team, start_time, end_time, availability)
VALUES(3, 1,
  now() + interval '3 days' + interval '1 hours',
  now() + interval '3 days' + interval '6 hours',
  0.7
);
