import { Router } from 'express';
import winston from 'winston';

export default function() {
  var api = Router();

  api.use('/users', (req, res, next) => {
    winston.debug("user list api  ");
    res.json({
      users: [
        {name: "Yohei", age: 100},
        {name: "Shu", age: 200},
        {name: "Kai", age: 300}
      ]
    })
  });

  api.use('/', (req, res, next) => {
    winston.debug("version api");
    res.json({
      version: '0.0.1'
    })
  });

  return api;
}
