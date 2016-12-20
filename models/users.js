const _db     = require( './connection' );
const bcrypt  = require( 'bcrypt' );
const salt    = bcrypt.genSaltSync(10);

const createSecure = ( password ) =>
  new Promise( ( resolve,reject ) =>
    bcrypt.genSalt( ( err, salt ) =>
      bcrypt.hash( password, salt, ( err, hash ) =>
        err? reject( err ) : resolve( hash )
      )
    )
  )

module.exports = {
  listUsers( req,res,next ) {
    _db.any( `SELECT * FROM users;` )
       .then( users => {
        res.users = users;
        next()
       } )
       .catch( error => {
        console.error( 'Error', error )
       })
  },

  getUserByUsername( req, res, next ) {
    _db.one( `
      SELECT *
      FROM users
      WHERE username = $/username/;
      `, req.body )
      .then( user=>{

        if( bcrypt.compareSync( req.body.password, user.password_digest ) ){
          res.user = user;
        }else{
          res.error = true
        }
        next()

      })
      .catch( error=>{
        console.error( 'Error ', error );
        res.error = error
        next()
      })
  },

  createUser( req,res,next ) {
    console.log( '=====', req.body )
    createSecure( req.body.password )
     .then( hash => {
        _db.one(`
          INSERT INTO users (username, email, phone_number, password_digest)
          VALUES ($1, $2, $3, $4)
          returning *;`, [req.body.username, req.body.email, req.body.phone, hash]
        )
        .then( newUser=> {
          res.user = newUser;
          next()
        })
        .catch( err=> {
          console.log( err )
          next()
        })


  })
},

  getUserEvents( req,res,next ) {
      // console.log(req.params)
      let uID = parseInt(req.params.id)
      _db.any( `SELECT title, image, event_time, event_id
        FROM users
        JOIN saved_events
        ON saved_events.user_reference = users.user_id
        WHERE users.user_id = $1;`, [uID])
         .then( userEvents => {
          res.events = userEvents;
          next()
         } )
         .catch( error => {
          console.error( 'Error', error )
          res.error = error
          next()
         })
    },

  addUserEvent(req,res,next) {
      // console.log('=====', req.body)
      let uID = parseInt(req.params.id)
      _db.one(
        `INSERT INTO
        saved_events (user_reference, event_id, title, image, event_time)
        VALUES ($1, $2, $3, $4, $5)
        returning *;`, [uID, req.body.event_id, req.body.title, req.body.image, req.body.event_time]
      )
      .then(saved_events => {
        res.rows = saved_events;
        next()
      })
      .catch(error =>{
        console.error('Error in ADDING event', req.body)
      })
    },


  deleteUserEvent(req,res,next) {
    //const iID = Number.parseInt(req.params.item_id)
    console.log(req.body.event_id)
    let uID = parseInt(req.params.id)
    _db.none(
      `DELETE FROM saved_events
      WHERE event_id = $1
      AND user_reference= $2;`, [req.body.event_id, uID]
    )
    .then(() => {
      console.log('Deleted saved_events successfully');
      next()
    })
    .catch(error =>{
      console.error('Error in DELETE saved_events', error)
    })
  }
}



