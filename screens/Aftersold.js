import React from 'react'
import {View, Image,Text, ScrollView} from 'react-native';

 const Aftersold=(props)=> {
    return (
       
        <View style={{backgroundColor:'#DCDCDC'}} >
          <ScrollView>
        
         <View>
          <Image
            style={{width:300,height:250,margin:25,alignSelf:'center'}}
            source={{uri:props?.route?.params?.item?.image}}/>
           <Text style={{fontSize:20}}> Title: {props?.route?.params?.item?.title}  </Text>
           <Text style={{fontSize:20}}> Description: {props?.route?.params?.item?.description}</Text>
            <Text style={{fontSize:20}}> Bid Win at Price: ${props?.route?.params?.item?.winner_bidprice}</Text> 
            <Text style={{fontSize:20,}}> Bid Winner: {props?.route?.params?.item?.winner_username}</Text>
          </View>
          </ScrollView>
          </View>

    )
}
export default Aftersold;