const getActivities = require('../database/queries/getActivities')
const getArticles = require('../database/queries/getArticles')
const getEvents = require('../database/queries/getEvents')

exports.getAll = (req, res) => {

  const allInfo = Promise.all([getActivities, getArticles, getEvents])
  allInfo.then(result => res.json(result))
    .catch(error => console.log(error)

    )
}

