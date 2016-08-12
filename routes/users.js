const express         = require('express');
const users           = express.Router()
const db              = require('../models/users')
const tokenService    = require('../service/tokenService')

const sendJSONresp = (req,res)=>res.json(res.events)
const sendError    = (err,req,res,next)=>res.status(500).json(err)



users.post('/',
    db.createUser,
    (req,res) => res.status(201).json({data: 'success'}).end()
)

users.use( tokenService.validateToken )

users.get('/', db.listUsers, (req,res)=>
  res.json( res.users))


users.route('/:id')
  .delete(db.deleteUserEvent, ( req,res ) => res.send( req.params.user_id ))

users.route('/:id')
  .get(db.getUserEvents, sendJSONresp)
  .post(db.addUserEvent, (req,res) => res.status(201).json({data: 'success'}).end())



module.exports = users;

