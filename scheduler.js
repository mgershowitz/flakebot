const cron     = require('node-cron')
const flakebot = require('./models/flakebot')
const moment   = require('moment');

module.exports = {
  start() {
    cron.schedule('* * * * *', () => {
      console.log('Running Send Notifications Worker for ' +  moment().format('YYYY-MM-DD HH:mm:ss'));
      // console.log(moment('2016-08-13 18:30:00'))
      flakebot.sendNotifications()
      // flakebot.listEventTimes()
      // notificationsWorker.run()
    })
  }
}



