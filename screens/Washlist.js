import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  ScrollView,
  TextInput,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {URL} from './utils/constant';

const Washlist = () => {
  const navigation = useNavigation();
  const [product, setproduct] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [filterproduct, setfilterproduct] = useState([]);
  const url = URL.Url + `Watchlist/?user=`;
  const filterurl = URL.Url+'Listing/';
  const auth = useSelector(state => state.auth);
  const isFocused = useIsFocused();

  useEffect(async () => {
    await axios.get(url + auth.user.user_id).then(resp => {
      setproduct(resp.data);
      let array = product.map(e => e.listing);
      axios.get(filterurl).then(response => {
        setfilterproduct(response.data);
        let array2 = response.data.filter(e => array.includes(e.id));
        setfilterproduct(array2);
      });
    });
  }, [isFocused]);

  const onRefresh = async () => {
    setRefreshing(true);
    await axios.get(url + auth.user.user_id).then(resp => {
      setproduct(resp.data);
      console.log(product, '1st attmpt');
      let array = product.map(e => e.listing);
      console.log(array, '2nd console');
      axios.get(filterurl).then(response => {
        setfilterproduct(response.data);
        console.log(filterproduct, '3rd console');
        let array2 = response.data.filter(e => array.includes(e.id));
        setfilterproduct(array2);
        setRefreshing(false);
        console.log(array2, '4th consloe');
      }).catch((error)=>{
        console.log(error);
      })
    });
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginTop: 20,
          padding: 30,
          fontSize: 15,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          backgroundColor: '#D3D3D3',
          marginBottom: 20,
        }}>
        <Image style={{width: 300, height: 250}} source={{uri: item.image}} />
        <Text> TITLE: {item.title}</Text>
        <Text> DESCRIPTION: {item.description}</Text>
        <Text> STARTING PRICE: ${item.start_price}</Text>
        <Button
          title="Buy Now"
          onPress={() => navigation.navigate('ProductDetails', {item})}
        />
      </View>
    );
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={['#9Bd35A', '#689F38']}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      <FlatList
      ListHeaderComponent={()=>(<View>
         <View style={styles.header}>
        <Text style={styles.text_header}>ARTMANDI</Text>

        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 20,
            marginTop: 5,
          }}>
          A platform where you can sell and buy your desired artworks!
        </Text>
      </View>
    
      </View>)}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        data={filterproduct}
        renderItem={item => renderItem(item)}
      />
    </ScrollView>
  );
};
export default Washlist;

const styles = StyleSheet.create({
 
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
  },

});
