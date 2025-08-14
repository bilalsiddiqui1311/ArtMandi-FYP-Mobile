import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ImageBackground, View,Text, StyleSheet,Button } from 'react-native';
const image = { uri: "https://papers.co/wallpaper/papers.co-nq33-space-galaxy-star-nature-dark-4-wallpaper.jpg" };



export default function Loadup({navigation}) {


    const presshandlerOnload=async()=>{
        navigation.replace('Login')
        console.log(await AsyncStorage.getItem("user_id",''))
        console.log(await AsyncStorage.getItem("username",''))    }
   
    
    return (
        <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>ARTMANDI</Text>
      <Text style={styles.paragraph}> 
      "ART IS A LINE AROUND YOUR THOUGHTS"  </Text>
      <Button title="Getting started" onPress={presshandlerOnload}/>
    </ImageBackground>
  </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    marginBottom:20
  }
  ,
  paragraph: {
    color: "white",
    fontSize: 22,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom:50
  }
});