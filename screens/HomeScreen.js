
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDarkMode } from '../DarkModeContext';

const HomeScreen = ({ navigation }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const navigateToOtherScreen = () => {
    navigation.navigate('Other');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkMode ? '#000' : '#fff' }}>
      <Text style={{ color: darkMode ? '#fff' : '#000' }}>Home Screen</Text>
      <Button title="Toggle Dark Mode" onPress={toggleDarkMode} />
      <Button title="Go to Other Screen" onPress={navigateToOtherScreen} />
    </View>
  );
};

export default HomeScreen;


