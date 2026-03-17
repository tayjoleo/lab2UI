import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function DetailScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/hole.jpg')}
      style={globalStyles.background}
      resizeMode="cover"
    >
      <View style={globalStyles.whimsicalBox}>
        <Text style={globalStyles.titleText}>THE RABBIT HOLE</Text>

        <Text style={globalStyles.whimsicalText}>
          This multi-screen application demonstrates core React Native
          principles. The project structure is organized into dedicated
          directories for screens, assets, and shared styles.
        </Text>

        <TouchableOpacity
          style={[globalStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.buttonText}>Climb Back Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}