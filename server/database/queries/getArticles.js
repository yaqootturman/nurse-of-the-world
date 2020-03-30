const dbConnection = require('./../db_connection')

const getArticles = () => {
  return dbConnection
    .query('SELECT * FROM article')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getArticles