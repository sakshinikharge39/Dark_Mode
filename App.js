
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DarkModeProvider } from './DarkModeContext';
import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Other" component={OtherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;




