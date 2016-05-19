import pg from 'pg';
import winston from 'winston';

/**
 * Data Models
 * request: Request of each stuffs
 * shift: Shift allocation for a timespan
 * member: Represents each member of the store
 * team: Represents a store or community
 */
class PgClient {
  constructor({ databaseUrl }) {
    this._init({ databaseUrl })
  }

  _init({ databaseUrl }) {
    this._databaseUrl = databaseUrl;
    this._client = new pg.Client(this._databaseUrl);
    this._client.connect();
  }

  /**
   * request is send by each member.
   * They are to be stored into requests table with this method.
   */
  storeRequest({ member, request, callback }) {
    this._client.query({
      text: "INSERT INTO requests (member, request) VALUES($1, $2)",
      values: [member, request]
    }, function(err, results) {
      if (err) {
        winston.log('error', 'Storing request failed');
        callback(err, null);
      }
      callback(null, results);
    });
  }

  /**
   * Return the requests in given time span.
   * Time span is assumed to be like one week, one month.
   * when a shift table is fixed.
   */
  requestsInTimespan({ time, callback }) {
    // TODO: Return the request of all members in given time span
  }

  /**
   * Store the optimized shift table into shift.
   *
   */
  storeShift({ shift, callback }) {
    // TODO: Store the given shift
  }

  /**
   * Register a member in existing team.
   */
  registerMember({ team, name, callback }) {
    this._client.query({
      text: "INSERT INTO members (team, name) VALUES($1, $2)",
      values: [team, name]
    }, function(err, results) {
      if (err) {
        winston.log('error', 'Registering team failed');
        callback(err, null);
      }
      callback(null, results);
    });
  }

  /**
   * Register a new team
   */
  registerTeam ({ name, callback }) {
    this._client.query({
      text: "INSERT INTO teams (name) VALUES($1)",
      values: [name]
    }, function(err, results) {
      if (err) {
        winston.log('error', 'Registering team failed');
        callback(err, null);
      }
      callback(null, results);
    });
  }
}

export default PgClient;
