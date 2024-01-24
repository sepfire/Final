// TotalStats.js
import React from 'react';
import { View, Text } from 'react-native';

const TotalStats = ({ workouts }) => {
  // Function to calculate total distance and total duration for each activity
  const calculateTotals = () => {
    const totals = {};

    workouts.forEach((workout) => {
      const { type, distance, duration } = workout;

      if (!totals[type]) {
        totals[type] = {
          totalDistance: 0,
          totalDuration: 0,
        };
      }

      totals[type].totalDistance += distance;
      totals[type].totalDuration += duration;
    });

    return totals;
  };

  // Calculate totals
  const totals = calculateTotals();

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Total Stats</Text>
      {Object.keys(totals).map((activityType, index) => (
        <View key={index}>
          <Text>{`Activity: ${activityType}`}</Text>
          <Text>{`Total Distance: ${totals[activityType].totalDistance} km`}</Text>
          <Text>{`Total Duration: ${totals[activityType].totalDuration} min`}</Text>
          <Text>--------------------</Text>
        </View>
      ))}
    </View>
  );
};

export default TotalStats;
