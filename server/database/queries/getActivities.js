const dbConnection = require('./../db_connection')

const getActivities = () => {

  return dbConnection
    .query('SELECT * FROM activity')
    .then(res => res.rows)


}
module.exports = getActivities