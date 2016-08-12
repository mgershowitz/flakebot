'use strict'
const env           = process.env.NODE_ENV || 'development';
const DEV           = env === 'development';
const dotenv        = require( 'dotenv' ).config()

const express       = require( 'express' )
const morgan        = require( 'morgan' )
const path          = require( 'path' )
const bodyParser    = require( 'body-parser' )
const cookieParser  = require('cookie-parser');
const app           = express()
const scheduler     = require('./scheduler');
const userRoute     = require( './routes/users' )
const apiRoute      = require( './routes/api' )
const eventsRoute   = require( './routes/events' )
const flakebotRoute = require( './routes/flakebot');
const port          = process.argv[2] || process.env.PORT || 3000

app.set( 'superSecret', 'my super secret word' )

app.use( morgan( DEV ? 'dev' : 'common') )

app.use( express.static( path.join( __dirname, 'dist' ) ) )

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: false} ) );
app.use( cookieParser() );
app.locals.moment = require('moment');

app.use( '/api', apiRoute );
app.use( '/api/users', userRoute );
app.use( '/events', eventsRoute )
app.use( '/flakebot', flakebotRoute);

scheduler.start()

app.listen( port, () => {
  console.log( 'Server maxin\' and relaxin\' at ', port )
} )
