import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press, accessibilityLabel}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 280,
        paddingVertical: 5,
        marginVertical: 17
      }}>
      <Text 
      accessibilityLabel="login-button"
      style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel} 
      </Text>
    </TouchableOpacity>
  );
}
