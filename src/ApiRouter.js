import { Router } from 'express';

export default function() {
  var api = Router();

  api.use('/users', (req, res, next) => {
    res.json({
      users: [
        {name: "Yohei", age: 100},
        {name: "Shu", age: 200},
        {name: "Kai", age: 300}
      ]
    })
  });

  api.use('/', (req, res, next) => {
    res.json({
      version: '0.0.1'
    })
  });

  return api;
}
