import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('Interaction!', 'You pressed the interactive element.');
  };

  return (
    <View style={globalStyles.container}>
      {/* 1. Text Element */}
      <Text style={globalStyles.titleText}>Welcome to Lab 2</Text>
      <Text style={globalStyles.paragraph}>
        This is the Home screen acting as the entry point.
      </Text>

      {/* 2. Image Element */}
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />

      {/* 3. Interactive Element */}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={handlePress}
      >
        <Text style={globalStyles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}