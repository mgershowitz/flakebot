const express        = require('express');
const flakeBot         = express.Router();
const momentTimeZone = require('moment-timezone');
const moment         = require('moment');
const model       = require('../models/flakebot');


// const getTimeZones = function(){
//   return momentTimeZone.tz.names();
// }

// // GET: /appointments
// router.get('/', function(req, res, next) {
//   Appointment.find()
//     .then(function (appointments) {
//       res.render('appointments/index', { appointments: appointments });
//     });
// });

flakeBot.get('/:id', model.youComing, (req,res)=>res.send('flakeBot'))
// flakebot.get('/flakebot', model.listEventTimes, (req,res)=>res.send('success'))

module.exports = flakeBot;



// GET: /appointments/create
// router.get('/create', function(req, res, next) {
//   res.render('appointments/create', { timeZones: getTimeZones(), appointment : new Appointment({name: "", phoneNumber: "", notification: '', timeZone: "", time:''}) });
// });

// POST: /appointments
// router.post('/', function(req, res, next) {
//   var name = req.body.name;
//   var phoneNumber = req.body.phoneNumber;
//   var notification = req.body.notification;
//   var timeZone = req.body.timeZone;
//   var time = moment(req.body.time, "MM-DD-YYYY hh:mma");

//   var appointment = new Appointment({ name: name, phoneNumber: phoneNumber, notification: notification, timeZone: timeZone, time: time });
//   appointment.save()
//     .then(function () {
//       res.redirect('/');
//     });
// });

// // GET: /appointments/:id/edit
// router.get('/:id/edit', function(req, res, next) {
//   var id = req.params.id;
//   Appointment.findOne({ _id: id })
//     .then(function (appointment) {
//       res.render('appointments/edit', { timeZones: getTimeZones(), appointment:  appointment});
//     });
// });

// // POST: /appointments/:id/edit
// router.post('/:id/edit', function(req, res, next) {
//   var id = req.params.id;
//   var name = req.body.name;
//   var phoneNumber = req.body.phoneNumber;
//   var notification = req.body.notification;
//   var timeZone = req.body.timeZone;
//   var time = moment(req.body.time, "MM-DD-YYYY hh:mma");

//   Appointment.findOne({ _id: id })
//     .then(function (appointment) {
//       appointment.name = name;
//       appointment.phoneNumber = phoneNumber;
//       appointment.notification = notification;
//       appointment.timeZone = timeZone;
//       appointment.time = time;

//       appointment.save()
//         .then(function () {
//           res.redirect('/');
//         });
//     });
// });

// // POST: /appointments/:id/delete
// router.post('/:id/delete', function(req, res, next) {
//   var id = req.params.id;

//   Appointment.remove({ _id: id })
//     .then(function () {
//       res.redirect('/');
//     });
