import React, {useState} from 'react';
import axios from 'axios';
import {Form, Formik} from 'formik';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {URL} from './utils/constant';
import {useSelector} from 'react-redux';
axios.defaults.baseURL = 'https://d6ac0b3d0345.ngrok.io';
const seller = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [image, setimage] = useState('');
  const [start_price, setstart_price] = useState(0);
  const [created_by, setcreated_by] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  console.log(date);
  const AddaProductHandler = async () => {
    
    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('description', description);
    formdata.append('category', category);
    formdata.append('start_price', start_price);
    formdata.append('created_by', auth.user.user_id);
    formdata.append('end_date', JSON.stringify(date));
    // formdata.append('image',
    //  {
    //   uri: image.uri,
    //   type: 'image/jpeg',
    //   name: 'image.jpg',
    // }
    // );
    console.log(formdata);
    try {
      const response = await axios.post(URL.Url + 'Listing/', formdata);
      const responsestr = JSON.stringify(response);
      navigation.navigate('Home');
      if (responsestr) {
        alert('Product Added Successfully!');
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  const openGallery = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
        includeBase64: true,
      },
      includeBase64: true,
    };
    Alert.alert(
      'Upload Image',
      'Choose image upload option',
      [
        {text: 'Cancel', onPress: () => console.log('Cancelled')},
        {
          text: 'Open Camera',
          onPress: () => {
            launchCamera(options, response => {
              console.log('Response = ', response);
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log(
                  'User tapped custom button: ',
                  response.customButton,
                );
                alert(response.customButton);
              } else {
                setimage(response.assets[0]);
              }
            });
          },
        },
        {
          text: 'Open Gallery',
          onPress: () => {
            launchImageLibrary(options, response => {
              console.log('Response = ', response);
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log(
                  'User tapped custom button: ',
                  response.customButton,
                );
                alert(response.customButton);
              } else {
                setimage(response.assets[0]);
                // console.log(response.assets[0]);
              }
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text_header}>Add your product</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.action}>
            <TextInput
              value={title}
              onChangeText={t => settitle(t)}
              placeholder="Product title"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              value={description}
              onChangeText={t => setdescription(t)}
              placeholder=" Write description"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              onPress={openGallery}
              style={{
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                borderRadius: 10,
                marginLeft: 30,
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Choose Image
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionPicker}>
            <Picker
              style={{width: '80%'}}
              selectedValue={category}
              onValueChange={itemvalue => setcategory(itemvalue)}>
              <Picker.Item label="EDUCATION" value="E" />
              <Picker.Item label="HOME" value="H" />
              <Picker.Item label="TOY" value="T" />
            </Picker>
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Enter starting price"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              value={start_price}
              onChangeText={t => setstart_price(t)}
              keyboardType="numeric"
            />
          </View>
          <View>
            <View>
              <Button onPress={showDatepicker} title="Enter End Date!" />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={AddaProductHandler}>
              <Text style={{color: '#fff'}}>ADD PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default seller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  footer: {
    flex: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
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
  textInput: {
    paddingLeft: 30,
    paddingBottom: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#009387',
    borderRadius: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 3,
  },
  actionPicker: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 20,
    borderWidth: 1,

    borderColor: '#f2f2f2',
    paddingBottom: 3,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
