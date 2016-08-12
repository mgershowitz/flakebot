const _db               = require( './connection' );
const moment            = require('moment');
const twilioSID         = process.env.TWILIO_ACCOUNT_SID;
const twilioAuth        = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilio            = require('twilio');

// var AppointmentSchema = new mongoose.Schema({
//   name:String,
//   phoneNumber: String,
//   notification : Number,
//   timeZone : String,
//   time : {type : Date, index : true}
// });

module.exports = {
  sendNotifications(){
    let client = new twilio.RestClient(twilioSID, twilioAuth);
    // docs.forEach(function(appointment) {
      // Create options to send the message
      let options = {
          to: "+" + '15165215169',
          from: twilioPhoneNumber,
          body: "Heeeeeyyyyyyy brrrrrroooooo, it's me FlakeBot!!"
      };

            // Send the message!
            client.sendMessage(options, (err, response) => {
                if (err) {
                    // Just log it for now
                    console.error(err);
                } else {
                    // Log the last few digits of a phone number
                    // var masked = appointment.phoneNumber.substr(0,
                    //     appointment.phoneNumber.length - 5);
                    // masked += '*****';
                    console.log('Message sent to test');
                }
            });
        },
  youComing(){
    let client = new twilio.RestClient(twilioSID, twilioAuth);
    // docs.forEach(function(appointment) {
      // Create options to send the message
      let options = {
          to: "+" + '15165215169',
          from: twilioPhoneNumber,
          body: "Bro, I'm totes there"
      };
            // Send the message!
            client.sendMessage(options, (err, response) => {
                if (err) {
                    // Just log it for now
                    console.error(err);
                } else {
                    // Log the last few digits of a phone number
                    // var masked = appointment.phoneNumber.substr(0,
                    //     appointment.phoneNumber.length - 5);
                    // masked += '*****';

                }
            });
        }
}
        // Don't wait on success/failure, just indicate all messages have been
        // queued for delivery
        // if (callback) {
        //   callback.call(this);








// module.exports = {
//   requiresNotification(date) {
//     return Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
//                             .diff(moment(date).utc())
//                           ).asMinutes()) === this.notification;
//   },

//   sendNotifications(callback) {
//   // now
//   var searchDate = new Date();
//   Appointment
//     .find()
//     .then(function (appointments) {
//       appointments = appointments.filter(function(appointment) {
//               return appointment.requiresNotification(searchDate);
//       });
//       if (appointments.length > 0) {
//         sendNotifications(appointments);
//       }
//     });

//     // Send messages to all appoinment owners via Twilio
//     function sendNotifications(docs) {
//         var client = new twilio.RestClient(cfg.twilioAccountSid, cfg.twilioAuthToken);
//         docs.forEach(function(appointment) {
//             // Create options to send the message
//             var options = {
//                 to: "+" + appointment.phoneNumber,
//                 from: cfg.twilioPhoneNumber,
//                 body: "Hi " + appointment.name + ". Just a reminder that you have an appointment coming up  " + moment(appointment.time).calendar() +"."
//             };

//             // Send the message!
//             client.sendMessage(options, function(err, response) {
//                 if (err) {
//                     // Just log it for now
//                     console.error(err);
//                 } else {
//                     // Log the last few digits of a phone number
//                     var masked = appointment.phoneNumber.substr(0,
//                         appointment.phoneNumber.length - 5);
//                     masked += '*****';
//                     console.log('Message sent to ' + masked);
//                 }
//             });
//         });

//         // Don't wait on success/failure, just indicate all messages have been
//         // queued for delivery
//         if (callback) {
//           callback.call(this);
//         }
//     }
// };
// }
