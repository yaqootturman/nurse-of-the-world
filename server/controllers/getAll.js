const getActivities = require('../database/queries/getActivities')
const getArticles = require('../database/queries/getArticles')
const getEvents = require('../database/queries/getEvents')

exports.getAll = (req, res) => {


  Promise.all([getActivities(), getArticles(), getEvents()]).then(result => res.json(result)
  )
    .catch(error => console.log(error)

    )
}

