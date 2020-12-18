module.exports = require('mongoose').connect('mongodb://localhost/workouts_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})