const express        = require('express');
const flakeBot         = express.Router();
const momentTimeZone = require('moment-timezone');
const moment         = require('moment');
const model       = require('../models/flakebot');


flakeBot.get('/:id', model.youComing, (req,res)=>res.send('flakeBot'))

module.exports = flakeBot;

