import React from 'react';
import {Modal, View, Text, TouchableOpacity, Alert} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {set_logout} from './redux/action/type';

const Logout = ({navigation}) => {
  const dispatch = useDispatch();

  const removeid = async () => {
    dispatch({type: set_logout, payload: {}});
    navigation.navigate('Login');
    // Alert.alert(
    //   "Alert",
    //   "Are you want to Exit",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () =>  navigation.navigate('Login')}
    //   ]
    // );

    await AsyncStorage.clear();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Are you want to Exit?</Text>
      <TouchableOpacity
        onPress={removeid}
        style={{
          padding: 15,
          borderRadius: 10,
          backgroundColor: '#009387',
          marginTop: 10,
        }}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
