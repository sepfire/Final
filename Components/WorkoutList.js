// WorkoutList.js
import React from 'react';
import { View, Text } from 'react-native';

const WorkoutList = ({ workouts }) => {
  return (
    <View>
      {workouts.map((workout, index) => (
        <View key={index}>
          <Text>{`${workout.type}, Distance: ${workout.distance} km, Duration: ${workout.duration} min`}</Text>
        </View>
      ))}
    </View>
  );
};

export default WorkoutList;
