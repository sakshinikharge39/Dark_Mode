import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { EventRegister } from 'react-native-event-listeners'
import React , { useState } from 'react';
import { useEffect } from 'react';


const Tab = createMaterialBottomTabNavigator();

export default function App(){
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log();
    const listener = EventRegister.addEventListener('changeTheme', (data) => {
      setDarkMode(data)
      console.log(darkMode);
    })
    console.log(darkMode, "runnning");
    return ()=> {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}




