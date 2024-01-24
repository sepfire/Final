import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Styles from './styles/Styles.js';
import Selections from './Components/selections.js';
import TotalStats from './Components/TotalStats';
import DATA from './data.js';

export default function App() {
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [showWorkouts, setShowWorkouts] = useState(true); // Set to true initially

  const handleWorkoutSelection = (selectedType) => {
    setSelectedWorkout(selectedType);
  };

  const handleAddWorkout = () => {
    if (selectedWorkout && distance && duration) {
      const newWorkout = {
        type: selectedWorkout,
        distance: parseFloat(distance),
        duration: parseInt(duration),
      };

      // Update the workouts array in the DATA object
      DATA.workouts.push(newWorkout);

      // Clear the input fields after adding a workout
      setSelectedWorkout('');
      setDistance('');
      setDuration('');
    } else {
      // Log or alert to identify which field is empty
      console.log('Selected Workout:', selectedWorkout);
      console.log('Distance:', distance);
      console.log('Duration:', duration);

      alert('Please fill in all fields.');
    }
  };

  const handleToggleWorkouts = () => {
    setShowWorkouts(!showWorkouts);
  };

  const handleGoBack = () => {
    // Reset the state to go back to the starting screen
    setShowWorkouts(true);
    // You might want to reset other state variables as needed
  };

  return (
    <View style={Styles.container}>
      {/* Title based on the toggle state */}
      <Text style={Styles.title}>{showWorkouts ? 'Workouts' : 'Workout Totals'}</Text>

      {showWorkouts ? (
        // Section to show when workouts are visible
        <View>
          <Selections onSelect={handleWorkoutSelection} />
          <TextInput style={Styles.input} placeholder='Distance in km' keyboardType='numeric' value={distance} onChangeText={setDistance} />
          <TextInput style={Styles.input} placeholder='Duration in minutes' keyboardType='numeric' value={duration} onChangeText={setDuration} />
          <Button title='ADD WORKOUT' onPress={handleAddWorkout} />

          {/* Toggle button to show/hide workouts */}
          <Button title='Toggle Workouts' onPress={handleToggleWorkouts} />
          
          {/* Displaying the list of workouts conditionally */}
          {DATA.workouts.map((workout, index) => (
            <View key={index}>
              <Text>{`Type: ${workout.type}, Distance: ${workout.distance} km, Duration: ${workout.duration} min`}</Text>
            </View>
          ))}
        </View>
      ) : (
        // Section to show when workout totals are visible
        <View>
          <TotalStats workouts={DATA.workouts} />
          {/* Button to go back to the starting screen */}
          <Button title='Go Back' onPress={handleGoBack} />
        </View>
      )}
    </View>
  );
}
