require('dotenv').config()

const express = require('express')
const workoutRouters = require('./routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
//middleware
app.use(express.json())
app.use(cors())
app.use((req,res,next) => {
          console.log(req.path, req.method)
          next()
})

// this line was used before creating workout.js now no use
// app.get('/',(req,res) => {
//           res.json({message: "Welcome to the App"})
// })


//routes
app.use('/api/workouts', workoutRouters)

//coonect to db
mongoose.connect(process.env.MONG_URI)
.then(() => {
          app.listen(process.env.PORT,() => {
                    console.log('Connected to DB & Listening on port 4000')
          })
})
.catch((error)=> {
          console.log(error)
})


//this was before db was connected now inside db now listen to req inside db .then
// app.listen(process.env.PORT,() => {
//           console.log('Listening! to port 4000')
// })