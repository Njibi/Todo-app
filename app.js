const express = require('express') ;
const mongoose = require ('mongoose') ;
const dotenv = require('dotenv') ;
const passport = require('passport')
const session = require('express-session')
const MongoDbStore = require('connect-mongo');
require('./config/passport')(passport)
const path = require("path")
require('./helpers/database').connect()
const app = express();
require('dotenv').config() ;
app.use(express.urlencoded({extended : true })) ;
app.use(express.static("public")) ;
app.set("view engine", "ejs") ;
app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store:  MongoDbStore.create({
      mongoUrl : "mongodb+srv://Njibi:Njibi.js@todo.uk8kn.mongodb.net/test"
    })
  })
)
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(require("./routes/index")) ;
app.use(require("./routes/todo"));
app.use('/auth', require('./routes/auth'))


app.listen(2080, ()=>{
    console.log("server listening on port 2080")
})