import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
function Info({ onPress, style, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text Style={style}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Info;
