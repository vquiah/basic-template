// required variables 

const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000


//connecting to mongodb

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('movies')
    })

// setting up middleware

app.set('view engine', 'ejs') // allows us to use the ejs template
app.use(express.static('public'))  //acess files from all the public folder
app.use(express.urlencoded({extended:true})) //parse url
app.use(express.json()) //allows us to read the data
app.use(cors())


//folder structure setup
 














 app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port localhost:8000`)
    }) 