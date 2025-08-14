import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {View, Image, FlatList,Text,StyleSheet, Button,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from './utils/constant';

const Sold=({navigation})=> {

  const[sold,setsold]=useState([]);
  

  useEffect(()=>{
axios.get(URL.Url+'Listing/').then(resp =>{
  let array= resp.data.filter( e => e.completed===true)
    setsold(array)
  
});
  },[])





const renderItem = ({item}) => {
    return (
      <View style={styles.ietm}>
          <Image
          style={{width:300,height:250,alignSelf:'center',marginBottom:10}}
          source={{uri:item.image}}
          />
        <Text > Title: {item.title}</Text>
        <Text > Artist: {item.artist}</Text>
        <Text > Starting Price: ${item.start_price}</Text>
        <Button title='Buy Now' onPress={()=>navigation.navigate('Aftersold',{item})} />
        
      </View>
    );
  };


  
    return (
      <View style={styles.container}>
         <FlatList style={styles}
         ListHeaderComponent={()=>(<View>

<TouchableOpacity
        style={{padding: 20}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image
          source={require('./images/menu.png')}
          style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            tintColor: '#009387',
          }}></Image>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={{fontSize:18,color:'#009387',}}>ARTMANDI</Text>

        <Text
          style={{
            fontStyle: 'italic',
            color: '#009387',
            fontSize: 20,
            marginTop: 5,
          }}>
          A platform where you can sell and buy your desired artworks!
        </Text>
      </View>
    

         </View>)}
        data={sold} 
        renderItem={renderItem} />

      </View>
    );
  }
  

const styles= StyleSheet.create({
container:{
flex:1,

paddingTop:40,
paddingHorizontal:10,

},
ietm:{
    marginTop:10,
    padding:30,
    backgroundColor:'#009387',
    fontSize:15
}
})
export default Sold;
