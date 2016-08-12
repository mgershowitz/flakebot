var flakebot = require('../models/flakebot')

module.exports = {
    run(){
      flakebot.sendNotifications();
    }
  }


