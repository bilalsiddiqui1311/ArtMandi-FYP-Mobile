import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Product from './products';
import {ScrollView} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
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
            tintColor: 'white',
          }}></Image>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.text_header}>ARTMANDI</Text>

        <Text
          style={{
            fontStyle: 'italic',
            color: '#fff',
            fontSize: 20,
            marginTop: 5,
          }}>
          A platform where you can sell and buy your desired artworks!
        </Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          {/* <Button title="SOLD PRODUCTS"/> */}
          <Product />
        </ScrollView>
      </View>
      <Text
        style={{backgroundColor: '#fff', fontSize: 16, textAlign: 'center'}}>
        © ArtMandi.2021
      </Text>
    </View>
  );
};

export default Home;

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
    flex: 4,
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
    marginTop: 50,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
});
