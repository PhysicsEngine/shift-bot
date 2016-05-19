import { Router } from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import PgClient from './PgClient.js';

export default function() {

  function _parseBody(body) {
    // Weird... due to bodyParse for json does not work
    return JSON.parse(body.toString('utf-8'));
  }

  var api = Router();

  var pgclient = new PgClient({
    databaseUrl: process.env.DATABASE_URL
  });

  // Register user
  api.post('/member', (req, res, next) => {
    var body = _parseBody(req.body);
    winston.debug('member register ', body.name);
    var team = body.team;
    var name = body.name;
    pgclient.registerMember({
      team: team,
      name: name,
      callback: function(err, results) {
        if (err) {
          res.json({
            status: "FAILED",
            message: err
          })
        } else {
          res.json({
            status: "SUCCESS",
            message: "Succeed to register " + name + " into " + team
          })
        }
      }
    })
  });

  // Register team
  api.post('/team', (req, res, next) => {
    var body = _parseBody(req.body);
    winston.debug('team request: ', body.name);
    var name = body.name;
    if (!name) {
      res.json({
        status: "FAILED",
        message: "No valid name"
      })
    }
    pgclient.registerTeam({
      name: name,
      callback: function(err, results) {
        if (err) {
          res.json({
            status: "FAILED",
            message: err
          })
        } else {
          res.json({
            status: "SUCCESS",
            message: "Succeed to register " + name
          })
        }
      }
    })
  });

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
