import React from 'react';
import { SafeAreaView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import Styles from '../styles/Styles.js';
import Icon from 'react-native-vector-icons/FontAwesome5';



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
            icon: () => <Icon name="walking" size={20} color="#900" />,
          },
          {
            value: 'run',
            label: 'Running',
            icon: () => <Icon name="running" size={20} color="#900" />,
          },
          {
            value: 'cycling',
            label: 'Cycling',
            icon: () => <Icon name="biking" size={20} color="#900" />,

          },
        ]}
      />
    </SafeAreaView>
  );
};

export default SelectionButtons;