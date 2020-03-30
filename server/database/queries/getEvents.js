const dbConnection = require('./../db_connection')

const getEvent = () => {
  return dbConnection
    .query('SELECT * FROM article')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getEvent