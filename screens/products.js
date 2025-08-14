import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {View, Image, FlatList, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from './utils/constant';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import { Form } from 'formik';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const Products = () => {
  const [product, setproduct] = useState([]);


  useEffect(() => {
    axios.get(URL.Url + 'Listing/').then(resp => {
      // setproduct(resp.data);
      let array = resp.data.filter(e => e.completed === false);
      setproduct(array);
      show();
    });
  }, []);

  const navigation = useNavigation();

  const show = async () => {
    console.log(await AsyncStorage.getItem('username'));
  };

  // const handleFinish = item => {
  //   console.log(item.id);
  //   const form =new FormData()
  //   form.append('listing',item.id)
  // axios.post(URL.Url+'closebid/',form).then((res)=>{
  //   console.log(res.data);
  //   alert('Bid Closed')
  // }).catch((error)=>{
  //   console.log(error);
  // })
  // };
  
  const renderItem = ({item}) => {
    let date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    let expirydate = moment(item.end_date).format('YYYY-MM-DD hh:mm:ss');
    let diffr = moment.duration(moment(expirydate).diff(moment(date)));
    // Difference of the expiry date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    return (
      <View style={styles.ietm}>
        <Image
          style={styles.imageStyle}
          source={{uri: item.image}}
        />
        <View style={{marginVertical: 10}}>
        
          <Text style={styles.textStyle}> Title: {item.title}</Text>
        
          <Text style={styles.textStyle}> Artist: {item.artist}</Text>
          <Text style={styles.textStyle}>
            STARTING PRICE: ${item.start_price}
          </Text>
        </View>
        <View
          style={{paddingVertical: 10, width: '100%', alignItems: 'center'}}>
          {d<=0?(false):(
          <View>
            <CountDown
              until={d}
              //duration of countdown in seconds
              timetoShow={('H', 'M', 'S')}
              //formate to show
              onFinish={() => alert('Bid Placed')}
              //on Finish call
              //on Press call
              size={20}
            />
          </View>
           )
  }  
        </View>

      <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', {item})}
      style={{backgroundColor:'white',padding:10,borderRadius:10}}
      >
        <Text>
          Buy Now
        </Text>
      </TouchableOpacity>
        </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList style={styles} data={product} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle:{
    width: '100%', height: 250, borderRadius: 20
  },
  container: {
    flex: 1,

    paddingTop: 40,
    paddingHorizontal: 10,
  },
  textStyle:{
    fontSize: 14, color: 'white'
  },
  ietm: {
    marginTop: 10,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: '#009387',
    fontSize: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Products;
