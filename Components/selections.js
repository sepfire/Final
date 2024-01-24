import React from 'react';
import { SafeAreaView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import Styles from '../styles/Styles.js';

const SelectionButtons = ({ onSelect }) => {
  const [value, setValue] = React.useState('');

  const handleValueChange = (selectedValue) => {
    setValue(selectedValue);
    onSelect(selectedValue); // Pass the selected value to the parent component
  };

  return (
    <SafeAreaView style={Styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={handleValueChange}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'run',
            label: 'Running',
          },
          {
            value: 'disc',
            label: 'Disc Golf',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default SelectionButtons;