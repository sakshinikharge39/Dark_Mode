import { View, Text, StyleSheet, Switch } from 'react-native'
import React, {useState} from 'react'
import { EventRegister } from 'react-native-event-listeners'

const Home = () => {
    const [darkMode, setDarkMode] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Switch 
      value={darkMode}
      onValueChange={(value) => { 
        return ( 
            setDarkMode(value)
        // EventRegister.emit('ChangeTheme', value)
        )
      }}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})