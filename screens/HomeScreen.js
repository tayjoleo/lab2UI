import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>THIS IS LANDING PAGE</Text>
    </View>
  );
}