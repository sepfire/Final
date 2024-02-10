// WorkoutList.js
import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../styles/Styles';

const WorkoutList = ({ workouts }) => {
  return (
    <View>
      <Text style={Styles.header}>Workout List</Text>
      {workouts.map((workout, index) => (
        <View key={index}>
          <Text>{`${workout.type}, Distance: ${workout.distance} km, Duration: ${workout.duration} min Day: ${workout.date}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default WorkoutList;
