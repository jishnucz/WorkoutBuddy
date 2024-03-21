const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')

//create new workout
const createWorkouts = async (req, res) => {
          const { title, rep, load } = req.body
          try {
                    const workout = await Workout.create({ title, rep, load })
                    res.status(200).json(workout)
          }
          catch (error) {
                    res.status(400).json({ error: error.message })
          }

}

const getWorkout = async (req, res) => {
          const { id } = req.params

          if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(404).json({ error: 'No Such Workout' })
          }
          const workout = await Workout.findById(id)

          if (!workout) {
                    return res.status(404).json({ error: 'No such workout' })
          }
          res.status(200).json(workout)

}

const getWorkouts = async (req, res) => {
          const workout = await Workout.find({}).sort({ createdAt: -1 })
          res.status(200).json(workout)
}



const deleteWorkout = async (req, res) => {
          const { id } = req.params
          if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(404).json({ error: 'No such workout' })
          }

          const workout = await Workout.findOneAndDelete({ _id: id })
          if (!workout) {
                    return res.status(400).json({ error: 'No such workout' })
          }
          res.status(200).json(workout)
}


const updateWorkout = async (req, res) => {
          const { id } = req.params
          if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(404).json({ error: 'No such workout' })
          }

          const workout = await Workout.findOneAndUpdate({ _id: id }, {
                    ...req.body
          })
          if (!workout) {
                    return res.status(400).json({ error: 'No such workout' })
          }
          res.status(200).json(workout)
}





module.exports = {
          createWorkouts,
          getWorkouts,
          getWorkout,
          deleteWorkout,
          updateWorkout
}