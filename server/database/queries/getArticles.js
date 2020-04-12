const dbConnection = require('./../db_connection')

const getArticles = () => {

  return dbConnection
    .query('SELECT * FROM article')
    .then(res => res.rows)
}
module.exports = getArticles