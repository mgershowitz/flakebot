'use strict'
const _db               = require( './connection' );
const moment            = require('moment');
const twilio            = require('twilio');
const twilioSID         = process.env.TWILIO_ACCOUNT_SID;
const twilioAuth        = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

module.exports = {
  sendNotifications(){
    let client = new twilio.RestClient(twilioSID, twilioAuth);
    _db.any( `SELECT username, phone_number, title, event_time FROM users JOIN saved_events ON users.user_id = saved_events.user_reference;` )
       .then( users => {
        console.log(users)
        users.forEach((user)=> {
          // Create options to send the message
          let now = moment().format('YYYY-MM-DD HH:mm:ss')
          let options = {
              to: "+" + user.phone_number,
              from: twilioPhoneNumber,
              body: `Broooo!!! I totally spaced and can't make it to ${user.title}! But next time bro we'll def hangout!!`
          }
          if (user.event_time === now){
            client.sendMessage(options, (err, response) => {
                if (err) {
                    console.error(err);
                } else {
                    let masked = user.phone_number.substr(0,
                        user.phone_number.length - 5);
                    masked += '*****';
                    console.log(`Message sent to ${masked}`);
                    _db.none(
                      `DELETE FROM saved_events
                      WHERE event_time = $1`, [user.event_time]
                    )
                    .then(() => {
                      console.log('Deleted saved_events successfully');
                      next()
                    })
                    .catch(error =>{
                      console.error('Error in DELETE saved_events', error)
                    })
                }
            })
          }
       })
      })
      .catch( error => {
        console.error( 'Error', error )
      })
  },
  youComing(req,res,next){
    console.log(req.params)
    let uID = parseInt(req.params.id)
    _db.any( `SELECT username, phone_number, title, event_time
      FROM users
      JOIN saved_events
      ON saved_events.user_reference = users.user_id
      WHERE users.user_id = $1;`, [uID])
       .then( user => {
        let upcomingTitle = user[0].title
        let upcomingTime = user[0].event_time
        for(let i = 1 ; i < user.length ; i++){
          if(Date.parse(user[i].event_time) < Date.parse(upcomingTime)){
            upcomingTime = user[i].event_time
            upcomingTitle = user[i].title
          }
        }
        console.log(user[0].phone_number)
        let client =  new twilio.RestClient(twilioSID, twilioAuth);
        let options = {
            to: "+" + user[0].phone_number,
            from: twilioPhoneNumber,
            body: `Bro, ${upcomingTitle} on ${moment(upcomingTime).format('LLLL')}? I am totes going to be there!!`
        };
              // Send the message!
              client.sendMessage(options, (err, response) => {
                  if (err) {
                      // Just log it for now
                      console.error(err);
                  } else {
                      // Log the last few digits of a phone number
                      let masked = user[0].phone_number.substr(0,
                          user[0].phone_number.length - 5);
                      masked += '*****';

                  }
              })
        next()
       } )
       .catch( error => {
        console.error( 'Error', error )
        res.error = error
        next()
       })
    }
    // docs.forEach(function(appointment) {
      // Create options to send the message
 }



//         // Don't wait on success/failure, just indicate all messages have been
//         // queued for delivery
//         // if (callback) {
//         //   callback.call(this);








// // module.exports = {
// //   requiresNotification(date) {
// //     return Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
// //                             .diff(moment(date).utc())
// //                           ).asMinutes()) === this.notification;
// //   },

// //   sendNotifications(callback) {
// //   // now
// //   var searchDate = new Date();
// //   Appointment
// //     .find()
// //     .then(function (appointments) {
// //       appointments = appointments.filter(function(appointment) {
// //               return appointment.requiresNotification(searchDate);
// //       });
// //       if (appointments.length > 0) {
// //         sendNotifications(appointments);
// //       }
// //     });

// //     // Send messages to all appoinment owners via Twilio
// //     function sendNotifications(docs) {
// //         var client = new twilio.RestClient(cfg.twilioAccountSid, cfg.twilioAuthToken);
// //         docs.forEach(function(appointment) {
// //             // Create options to send the message
// //             var options = {
// //                 to: "+" + appointment.phoneNumber,
// //                 from: cfg.twilioPhoneNumber,
// //                 body: "Hi " + appointment.name + ". Just a reminder that you have an appointment coming up  " + moment(appointment.time).calendar() +"."
// //             };

// //             // Send the message!
// //             client.sendMessage(options, function(err, response) {
// //                 if (err) {
// //                     // Just log it for now
// //                     console.error(err);
// //                 } else {
// //                     // Log the last few digits of a phone number
// //                     var masked = appointment.phoneNumber.substr(0,
// //                         appointment.phoneNumber.length - 5);
// //                     masked += '*****';
// //                     console.log('Message sent to ' + masked);
// //                 }
// //             });
// //         });

// //         // Don't wait on success/failure, just indicate all messages have been
// //         // queued for delivery
// //         if (callback) {
// //           callback.call(this);
// //         }
// //     }
// // };
// // }
