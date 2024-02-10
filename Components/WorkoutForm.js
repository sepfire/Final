// WorkoutForm.js
import React, { useState } from 'react';
import { View, Button, SafeAreaView, Modal, Pressable } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Styles from '../styles/Styles';
import SelectionButtons from './Selections';
import { Calendar } from 'react-native-calendars';


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
        date: date.dateString,
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

  const [date, setDate] = useState('');
  const [visible, setVisible] = useState(false);

  function dateSelected(day) {
    setVisible(false);
    setDate(day);
  }
  return (
  <SafeAreaView>
    <View style={Styles.container}>
      <SelectionButtons onSelect={handleWorkoutSelection} />
      <TextInput
        style={Styles.input}
        label="Distance (km)"
        mode='outlined'
        keyboardType='numeric'
        value={distance}
        onChangeText={setDistance}
      />
      <TextInput
        style={Styles.input}
        label="Duration (min)"
        keyboardType='numeric'
        value={duration}
        onChangeText={setDuration}
      />
      <Pressable onPress={() => setVisible(true)}>
        <Text style={Styles.date}>{date ? date.dateString : "Select Date"}</Text>
      </Pressable>

      <Modal visible={visible} transparent={false}>
        <Calendar onDayPress={dateSelected}/>
      </Modal>
      <Button style={Styles.napit} title='ADD WORKOUT' onPress={handleAddWorkout} />
    </View>
  </SafeAreaView>
  );
};

export default WorkoutForm;
