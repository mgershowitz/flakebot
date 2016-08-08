const express   = require('express');
const event     = express.Router()
const db        = require('../models/events')

const sendJSONresp = (req,res)=>res.json(res.rows)

event.route('/')
  .get(db.getEvents, sendJSONresp)

module.exports = event;
