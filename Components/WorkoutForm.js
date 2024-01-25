// WorkoutForm.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Styles from '../styles/Styles';
import SelectionButtons from './Selections';

const WorkoutForm = ({ onAddWorkout }) => {
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const handleWorkoutSelection = (selectedType) => {
    setSelectedWorkout(selectedType);
  };

  const handleAddWorkout = () => {
    if (selectedWorkout && distance >= 0 && duration >= 0) {
      const newWorkout = {
        type: selectedWorkout,
        distance: parseFloat(distance),
        duration: parseInt(duration),
        // You can add the date here if needed
        // date: new Date().toISOString(),
      };

      onAddWorkout(newWorkout);

      // Clear the input fields after adding a workout
      setSelectedWorkout('');
      setDistance('');
      setDuration('');

      alert('Workout added successfully!');
    } else {
      alert('Please fill in all fields and use positive numbers.');
    }
  };

  return (
    <View style={Styles.container}>
      <SelectionButtons onSelect={handleWorkoutSelection} />
      <TextInput
        style={Styles.input}
        label="Distance"
        mode='outlined'
        keyboardType='numeric'
        value={distance}
        onChangeText={setDistance}
      />
      <TextInput
        style={Styles.input}
        label="Duration"
        keyboardType='numeric'
        value={duration}
        onChangeText={setDuration}
      />
      <Button style={Styles.napit} title='ADD WORKOUT' onPress={handleAddWorkout} />
    </View>
  );
};

export default WorkoutForm;
