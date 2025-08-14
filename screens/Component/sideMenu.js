
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import Styles from "./Styles"
const sideMenu = ({navigation}) => {
const auth=useSelector(state=>state.auth)

return (
      <View style={Styles.container}>
        <View style={Styles.scrollView}>
          <ScrollView>
            <View>
              <View style={Styles.imageBox}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    marginTop: 30,
                  }}>
                  <ImageBackground
                    source={require('../images/user-default.jpg')}
                    style={{
                      height: 40,
                      width: 40,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}
                    imageStyle={{
                      borderRadius: 16,
                    }}>
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#219653',
                      }}
                    />
                  </ImageBackground>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',

                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'column',
                        paddingLeft: 20,
                        justifyContent: 'center',
                      }}>
                      <Text style={[Styles.buttonText, {fontSize: 14}]}>
                        {auth?.user?.username}
                      </Text>
                      <Text
                        style={[
                          Styles.buttonText,
                          {fontSize: 10, color: '#219653'},
                        ]}>
                        Active
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.closeDrawer()}>
                      <Image
                        style={{height: 14, width: 14, resizeMode: 'contain'}}
                        source={require('../images/cross.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 30}}>
                <TouchableOpacity
                  style={Styles.buttonContainer}
                  onPress={() => navigation.navigate('Home')}>
                  <Text style={Styles.buttonText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={Styles.buttonContainer}
                  onPress={() =>
                    navigation.navigate('Policies')
                  }>
                  <Text style={Styles.buttonText}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.buttonContainer}
                  onPress={() =>
                    navigation.navigate('TermsService')
                  }>
                  <Text style={Styles.buttonText}>Terms & Services</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={Styles.buttonContainer}
                  onPress={() =>
                    navigation.navigate('About')
                  }>
                  <Text style={Styles.buttonText}>About</Text>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
        </View>
      </View>
    );
  }



export default sideMenu
