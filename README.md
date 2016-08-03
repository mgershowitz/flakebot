# Flakebot

![](https://i.imgflip.com/63l1k.gif)

## Description

Flakebot allows you to search for upcoming events s by keyword, location, time period, category, performer, or venue. Once you pick an event that you like, you can schedule the event into your upcoming calendar. Once you've save the event, Flakebot will confirm via sms messaging and agree to join you for the event. At an hour before the event, Flakebot will send you a reminder accompanied with it's regrets that it will not be able to attend the evnt with you. Through SMS messaging, you can receive information about your most upcoming event and also get Flakebot's RSVP to the event. It's toootallly going to make it this time! 

## APIs
### Eventful
this API allows you to search for upcoming events by keyword, location, time, category, performer, or venue
http://api.eventful.com/docs..
### Twilio
Twilio allows messages to be sent from a users phone number, which is then parsed as HTTP and then interpreted by the app. This is the secondary method to interact with Flakebot
https://www.twilio.com/api
### PostgreSQL Users
The is a user database so that individual users can select their own set of events and text back and forth with flakebot

## Technologies
### cron/at jobs
These will be used to interface with flake bot so that you can check on the timing of your events and so that flake bot can send you reminders and apoligies when you event occurs.
http://www.thesitewizard.com/general/set-cron-job.shtml

## Wireframes

### Mainpage
![](http://i.imgur.com/FUkHTMF.png)
### Click on Event
![](http://i.imgur.com/G1rg9z0.png)
### My Events
![](http://i.imgur.com/wjW4vBa.png)
### My Event details
![](http://i.imgur.com/zeiKIQh.png)
