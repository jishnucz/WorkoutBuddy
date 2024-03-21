const express = require('express')
// below line was there before controller was created now on controller
// const Workout = require('../models/workoutModels')
const router = express.Router()
const {createWorkouts, getWorkouts,getWorkout,deleteWorkout,updateWorkout}= require('../controller/workoutController')


router.get('/', getWorkouts)

router.get('/:id', getWorkout)
//first post request to study now no use
// router.post('/', (req, res) => {
//           res.json({ Message: 'Post a new workouts' })
// })

router.post('/', createWorkouts)

router.delete('/:id', deleteWorkout )


router.patch('/:id', updateWorkout)

module.exports = router