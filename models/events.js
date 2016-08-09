'use strict'
const request = require('request')
const apikey  = process.env.key;

module.exports = {

  getEvents(req,res,next) {
    request({
      url:'http://api.eventful.com/json/events/search',
      method:'get',
      qs: {
        app_key: apikey,
        t: req.query.time,
        page_size: 30,
        image_sizes: "large",
        location: req.query.location
      },
      json:true
    },
    (err,result,body)=>{
      if (err) throw err;
      res.rows = result.body.events
      // console.log(result)
      next()
    })
  },
  getEventDetail(req,res,next){
    request({
        url:'http://api.eventful.com/json/events/get',
        method:'get',
        qs: {
          app_key: apikey,
          id: req.query.id,
        },
        json:true
      },
      (err,result,body)=>{
        if (err) throw err;
        console.log(result.body)
        res.rows = result.body
        next()
      })
    }
}

