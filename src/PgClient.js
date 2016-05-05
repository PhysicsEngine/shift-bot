import pg from 'pg';

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
  }

  /**
   * request is send by each member.
   * They are to be stored into requests table with this method.
   */
  storeRequest({ member, request }) {
    //TODO: Store a request on table
  }

  /**
   * Return the requests in given time span.
   * Time span is assumed to be like one week, one month.
   * when a shift table is fixed.
   */
  requestsInTimespan({ time }) {
    // TODO: Return the request of all members in given time span
  }

  /**
   * Store the optimized shift table into shift.
   *
   */
  storeShift({ shift }) {
    // TODO: Store the given shift
  }

  /**
   * Register a member in existing team.
   */
  registerMember({ team, member }) {
    //TODO: Register a member into the team
  }

  /**
   * Register a new team
   */
  registerTeam ({ team }) {
    // TODO: Register a team
  }
}
