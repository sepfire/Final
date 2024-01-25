// App.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Styles from './styles/Styles';
import WorkoutForm from './Components/WorkoutForm.js';
import WorkoutList from './Components/WorkoutList.js';
import TotalStats from './Components/TotalStats';
import DATA from './data';

export default function App() {
  const [showWorkouts, setShowWorkouts] = useState(true); // Set to true initially
  const [workouts, setWorkouts] = useState(DATA.workouts);

  const handleAddWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
    // Assuming DATA is a state, you should update it using setData
    // setData({ ...DATA, workouts: [...DATA.workouts, newWorkout] });
  };

  const handleToggleWorkouts = () => {
    setShowWorkouts(!showWorkouts);
  };

  const handleGoBack = () => {
    // Reset the state to go back to the starting screen
    setShowWorkouts(true);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{showWorkouts ? 'Workouts' : 'Workout Totals'}</Text>

      {showWorkouts ? (
        // Section to show when workouts are visible
        <WorkoutForm onAddWorkout={handleAddWorkout} />
      ) : (
        // Section to show when workout totals are visible
        <View>
          <TotalStats workouts={workouts} />
          <WorkoutList workouts={workouts} />

          {/* Button to go back to the starting screen */}
          <Button title='Go Back' onPress={handleGoBack} />
        </View>
      )}

      {showWorkouts && (
        // Toggle button to show/hide workouts
        <Button title={showWorkouts ? 'Show Workout Totals' : 'Show Workouts'} onPress={handleToggleWorkouts} />
      )}
    </View>
  );
}
