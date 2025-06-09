import React from 'react';
import {TextInput} from 'react-native';
import {black, darkGreen, orange, yellowOrange} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 10, width: '68%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={black}></TextInput>
  );
};

export default Field;
