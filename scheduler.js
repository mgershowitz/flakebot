// const notificationsWorker = require('./workers/notificationsWorker');
const cron                = require('node-cron')
const flakebot = require('./models/flakebot')
const moment              = require('moment');

module.exports = {
  start() {
    cron.schedule('* * * * *', () => {
      console.log('Running Send Notifications Worker for ' +  moment().format());
      // flakebot.sendNotifications()
      // flakebot.listEventTimes()
      // notificationsWorker.run()
    })
  }
}



