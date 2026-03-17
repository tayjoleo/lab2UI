import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, Easing, ImageBackground } from 'react-native'; // Added ImageBackground
import { useIsFocused } from '@react-navigation/native';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  const messages = ["Hey!", "Stop!", "Enough!!"];

  useEffect(() => {
    if (isFocused) {
      setClickCount(0);
      translateX.setValue(0);
      setShowMessage(false);
    }
  }, [isFocused]);

  const handleLogoClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 800);

    if (nextCount < 4) {
      Animated.sequence([
        Animated.timing(translateX, { toValue: 15, duration: 40, useNativeDriver: true }),
        Animated.timing(translateX, { toValue: -15, duration: 40, useNativeDriver: true }),
        Animated.timing(translateX, { toValue: 0, duration: 40, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.timing(translateX, {
        toValue: 800,
        duration: 600,
        easing: Easing.back(1),
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <ImageBackground
      source={require('../assets/forest.png')}
      style={globalStyles.container}
      resizeMode="cover"
    >
      <View style={{ alignItems: 'center' }}>
        <Text style={globalStyles.titleText}>Don't poke the bunny!</Text>

        <View style={{ height: 50, justifyContent: 'center' }}>
          {showMessage && (
            <Text style={[globalStyles.paragraph, { fontWeight: 'bold', color: 'red' }]}>
              {clickCount < 4 ? messages[clickCount - 1] : ""}
            </Text>
          )}
        </View>

        <View style={{ height: 180, justifyContent: 'center', alignItems: 'center' }}>
          {clickCount < 4 ? (
            <TouchableOpacity onPress={handleLogoClick} activeOpacity={1}>
              <Animated.Image
                source={require('../assets/logo.png')}
                style={{
                  width: 150,
                  height: 150,
                  transform: [{ translateX }]
                }}
              />
            </TouchableOpacity>
          ) : (
            <Text style={[globalStyles.paragraph, { fontStyle: 'italic', color: '#fff' }]}>
              :(
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={globalStyles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}