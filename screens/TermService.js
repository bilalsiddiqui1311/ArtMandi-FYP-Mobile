import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, Text, StyleSheet,TextInput,Image, TouchableOpacity,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

 function TermService({navigation}) {

    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image
              source={require('./images/arrow.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                tintColor: 'white',
              }}></Image>
          </TouchableOpacity>
     
          <Text style={styles.text_header}>TERMS OF SERVICE</Text>
        </View>
        <View style={styles.footer}> 
        <ScrollView>
    <View>


        <View className='Outer' >
       <Text>
        The following terms of service (these "Terms of Service"), govern your access to and use of the ArtMandi website and mobile application, including any content, functionality and services offered on or through ArtmandiWebsite or the Artmandi mobile application    </Text>
        <Text style={{marginTop:5,fontWeight:'bold'}}>Buyers</Text>
         <Text> Buyers are users who purchase artwork on Artmandi.</Text>
         <Text style={{marginTop:5,fontWeight:'bold'}}>Sellers  </Text>
          <Text>Sellers are users who offer and make atrwork and sell on Fiverr.</Text> 
         <Text style={{marginTop:5,fontWeight:'bold'}}>Bidding</Text>
          <Text> A certain time for bidding will provided and after that the bidding stops and highest bids wins.</Text>
         <Text style={{marginTop:5,fontWeight:'bold'}}>Payment</Text>
          <Text  style={{marginBottom:100}} >At Initial stages, Cash of Delivery is a payment method, but after Final development stage, users can buy thorugh bank cards. </Text>
           
           </View>
</View>
</ScrollView>
</View>
</View>


    )
}
export default TermService;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    }
  });
  