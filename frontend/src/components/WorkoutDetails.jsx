const WorkoutDetails = ({workout}) => {

const handleClick = async () => {
          try{
                    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{
                    method: 'DELETE'
          });
          // const json = await response.text()
          if (response.ok) {
                    // If deletion is successful, perform any necessary actions (e.g., refresh the list)
                    console.log('Workout deleted successfully');
                  } else {
                    console.error('Failed to delete workout');
                  }
                } catch(error) {
                  console.error('Error deleting workout:', error);
                }



                

}

return (
          <div className="workout-details">
                    <h4>{workout.title}</h4>
                    <p><strong>Load (kg):</strong>{workout.load}</p>
                    <p><strong>Reps:</strong>{workout.rep}</p>
                    <p>{workout.createdAt}</p>
                    <button onClick={handleClick}>Delete</button>
          </div>
)
}

export default WorkoutDetails