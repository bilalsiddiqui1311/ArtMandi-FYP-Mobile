import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
function About({navigation}) {
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
          <View style={{alignItems:'center'}}>
       
          <Text style={styles.text_header}>ABOUT ARTMANDI</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <View>
            <View className="Outer">
              <View className="inner-container">
                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 20}}>
                  About The Author and Co Authors
                </Text>
                <Text style={{marginLeft: 100}}>BILAL, HARIS AND ZAID</Text>
                <Text
                  style={{marginTop: 20, fontWeight: 'bold', marginLeft: 130}}>
                  Drop Us A Message
                </Text>
                <Text>
                  We are providing our viewers and visitors to send us there
                  opinions about the website
                </Text>

                <Text style={{marginTop: 20, fontWeight: 'bold'}}>
                  Client Side Developer :{' '}
                </Text>
                <Text> bilalsiddiqui1311@gmail.com</Text>

                <Text style={{marginTop: 20, fontWeight: 'bold'}}>
                  Server Side Developer :{' '}
                </Text>
                <Text> zaid.butt.10@hotmail.com</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
});
