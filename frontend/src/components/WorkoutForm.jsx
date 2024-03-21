import { useState } from "react";

const WorkoutForm = () => {
          const [title, setTitle] = useState('')
          const [load, setLoad] = useState('')
          const [rep, setRep] = useState('')
          const [error, setError] = useState(null)

          const handleSubmit = async (e) => {
                    e.preventDefault()

                    const workout = {title,load,rep}

                    const response = await fetch('http://localhost:4000/api/workouts', {
                              method: 'POST',
                              body: JSON.stringify(workout),
                              headers: {
                                        'Content-Type': 'application/json'
                              }
                    })

                    const json = await response.text()

                    if (!response.ok) {
                              setError(json.error)

                    }

                    if(response.ok)
                    {
                              setError(null)
                              setTitle('')
                              setLoad('')
                              setRep('')
                              console.log('New Workout Added', json)
                    }
          }

          return(

                    <form action="" className="create" onSubmit={handleSubmit}>
                              <title>Add a New Workout</title>

                              <label htmlFor="">Excercise Title:</label>
                              <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

                              <label htmlFor="">Load (in kg):</label>
                              <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} />

                              <label htmlFor="">Reps :</label>
                              <input type="number" onChange={(e) => setRep(e.target.value)} value={rep} />

                              <button>Add Workout</button>
                    </form>
                    
          )
}

export default WorkoutForm