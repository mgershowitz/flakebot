'use strict'
const request = require('request')
const apikey  = process.env.key;

module.exports = {

  getEvents(req,res,next) {
  //console.log(req.query.location)
  request({
      url:'http://api.eventful.com/json/events/search',
      method:'get',
      qs: {
        app_key: apikey,
        // q: "music",
        t: "This Weekend",
        image_sizes: "large",
        location: req.query.location
      },
      json:true
    },
    (err,result,body)=>{
      if (err) throw err;
      res.rows = result.body.events
      console.log(result)
      next()
    })
  }
}

