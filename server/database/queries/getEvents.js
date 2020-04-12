const dbConnection = require('./../db_connection')

const getEvents = () => {

  return dbConnection
    .query('SELECT * FROM event')
    .then(res => res.rows)

}

module.exports = getEvents